"use client";
import { sendBotMessage } from "@/actions/ia";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  PiCalendarBlank,
  PiPaperPlaneRight,
  PiRobot,
  PiSpinnerGap,
  PiUser,
} from "react-icons/pi";
import Markdown from "react-markdown";
import { toast } from "sonner";
import { z } from "zod";
import { LoaderIA } from "./animation-ia";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres",
  }),
});

const LOCAL_STORAGE_KEYS = {
  CHAT: "chat-ia",
  TIMESTAMP: "chat-ia-timestamp",
};

const MAX_MESSAGES_PER_DAY = 30;

const isClient = () => typeof window !== "undefined";

function formatTime(date: Date) {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export type SendMailFormValues = z.infer<typeof formSchema>;

function formatDate(date: Date) {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function isSameDay(date1: Date, date2: Date) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function getInitialChat(): string[] {
  if (!isClient()) return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.CHAT);
  return stored
    ? JSON.parse(stored)
    : ["Olá! Sou Jorge IA, o que quer saber sobre mim?"];
}

function getStoredMessages(): string[] {
  if (!isClient()) return [];
  const stored = localStorage.getItem(LOCAL_STORAGE_KEYS.CHAT);
  return stored ? JSON.parse(stored) : [];
}

function storeMessages(messages: string[]) {
  localStorage.setItem(LOCAL_STORAGE_KEYS.CHAT, JSON.stringify(messages));
}

function clearChatIfNewDay() {
  if (!isClient()) return;

  const lastTimestamp = localStorage.getItem(LOCAL_STORAGE_KEYS.TIMESTAMP);
  const now = new Date();

  if (lastTimestamp) {
    const lastDate = new Date(lastTimestamp);
    if (!isSameDay(now, lastDate)) {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.CHAT);
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TIMESTAMP);
    }
  }
}

function isMessageLimitReached(): boolean {
  if (!isClient()) return false;

  const messages = getStoredMessages();
  return messages.length >= MAX_MESSAGES_PER_DAY;
}

export function ChatIaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<string[]>([]);
  const [blockChat, setBlockChat] = useState(false);

  const data = new Date();
  const chatActual = useRef<HTMLDivElement>(null);

  const form = useForm<SendMailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(formData: SendMailFormValues) {
    if (isMessageLimitReached()) {
      setBlockChat(true);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.TIMESTAMP,
        new Date().toISOString()
      );
      return;
    }

    setIsLoading(true);

    const responseIA = await sendBotMessage(formData);
    if (responseIA !== null) {
      const updatedChat = [...chat, formData.message, responseIA];

      setChat(updatedChat);
      storeMessages(updatedChat);
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.TIMESTAMP,
        new Date().toISOString()
      );

      form.reset();
    } else {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    }

    setIsLoading(false);
  }

  const scrollToBottom = () => {
    chatActual.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  useEffect(() => {
    clearChatIfNewDay();

    const initialChat = getInitialChat();
    setChat(initialChat);

    if (isMessageLimitReached()) {
      setBlockChat(true);
    }
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:animate-jump fixed bottom-40 right-4 cursor-pointer bg-background shadow-lg shadow-neutral-200 dark:shadow-neutral-700 p-2 rounded-full text-producthunt">
          <PiRobot size={30} />
        </div>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg">
        <div className="flex flex-col gap-2">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="border-b p-4 text-base">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600">
                  <LoaderIA />
                </Avatar>
                <div className="flex flex-col">
                  <h3 className="font-semibold ">Jorge IA</h3>
                  <p className="text-xs text-foreground/60 flex items-center gap-1">
                    <PiCalendarBlank size={18} />
                    Assistente pessoal
                  </p>
                </div>
              </div>
            </DialogTitle>
          </DialogHeader>
        </div>

        {chat.length > 0 && (
          <div className="relative overflow-hidden">
          {/*  <BackgroundChat /> */}

            <div className="px-4 py-2 bg-foreground/10 w-full z-10 relative">
              <p className="text-xs text-foreground/55 text-center">
                Conversa iniciada
              </p>
              <p className="text-xs text-foreground/70 text-center">
                {`${formatDate(data)} - ${formatTime(data)}`}
              </p>
            </div>

            <div className="h-full max-h-96 overflow-y-auto border-none sm:border flex flex-col items-start min-h-96 px-0 py-5 sm:p-4 gap-6">
              {chat.map((message, index) => (
                <div
                  key={message + index}
                  className={`flex z-10 gap-3 w-full p-4 ${index % 2 !== 0 ? "flex-row-reverse ml-auto" : "flex-row"}`}
                >
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarFallback
                      className={`text-xs ${
                        index % 2 === 0
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {index % 2 === 0 ? (
                        <LoaderIA />
                      ) : (
                        <PiUser className="w-4 h-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-2xl max-w-[70%] relative ${
                      index % 2 === 0
                        ? "bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800"
                        : "bg-gray-100"
                    }`}
                  >
                    <div className="text-sm text-black [&_a]:text-blue-500">
                      <Markdown>{message}</Markdown>
                    </div>
                    <div
                      className={`absolute -bottom-5 ${index % 2 === 0 ? "left-3" : "right-3"}`}
                    >
                      <small className="text-foreground/60">
                        {index % 2 === 0
                          ? `Jorge IA - ${formatTime(data)}`
                          : `Você - ${formatTime(data)}`}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={chatActual} />
            </div>
          </div>
        )}
        <div className="border-t px-6 py-4">
          {isLoading ? (
            <div className="flex gap-2">
              <PiSpinnerGap className="h-4 w-4 animate-spin" />
              <span className="text-gray-500">Jorge IA está pensando...</span>
            </div>
          ) : (
            <>
              {!blockChat ? (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-5">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="relative flex rounded-md shadow-xs">
                            <FormControl>
                              <Input
                                placeholder="Faça sua pergunta"
                                className="-me-px flex-1 rounded-e-none shadow-none focus-visible:z-10"
                                type="text"
                                autoFocus
                                {...field}
                                disabled={isLoading}
                                onKeyUp={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    form.handleSubmit(onSubmit)();
                                  }
                                }}
                              />
                            </FormControl>
                            <Button
                              type="submit"
                              className="border-input bg-background text-foreground hover:bg-accent hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 inline-flex items-center rounded-e-md border px-3 text-sm font-medium transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 rounded-none rounded-r-md shadow-none"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <PiSpinnerGap className="h-4 w-4 animate-spin" />
                              ) : (
                                <PiPaperPlaneRight className="h-4 w-4" />
                              )}
                            </Button>
                            <FormMessage className="absolute -bottom-4 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>
                  </form>
                </Form>
              ) : (
                <div className="text-center text-gray-500 mt-4">
                  <p>
                    Você atingiu o limite de mensagens por hoje. Por favor,
                    retorne mais tarde.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
