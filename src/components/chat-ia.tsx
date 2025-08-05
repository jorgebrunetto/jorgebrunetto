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
import { toast } from "sonner";
import { z } from "zod";
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

export type SendMailFormValues = z.infer<typeof formSchema>;

const formatTime = (date: Date) => {
  return date.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export function ChatIaForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<string[]>([
    "Olá! Sou Jorge IA, o que quer saber sobre mim?",
  ]);

  const data = new Date();
  const chatActual = useRef<HTMLDivElement>(null);

  const form = useForm<SendMailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(formData: SendMailFormValues) {
    setIsLoading(true);
    const responseIA = await sendBotMessage(formData);

    if (responseIA !== null) {
      setChat((prev) => [...prev, formData.message, responseIA]);
      form.reset();
      setIsLoading(false);
    } else {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
      setIsLoading(false);
    }
  }

  const scrollToBottom = () => {
    chatActual.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="hover:animate-jump fixed bottom-40 right-4 cursor-pointer bg-background shadow-lg shadow-neutral-200 dark:shadow-neutral-700 p-2 rounded-full text-producthunt">
          <PiRobot size={30} />
        </div>
      </DialogTrigger>
      <DialogContent className="h-full sm:h-auto flex flex-col">
        <div className="flex flex-col gap-2">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600">
                  <AvatarFallback className="font-semibold">
                    <PiRobot className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
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
          <div>
            {/* Conversation Started */}
            <div className="px-4 py-2 bg-foreground/10 w-full">
              <p className="text-xs text-foreground/55 text-center">
                Conversa iniciada
              </p>
              <p className="text-xs text-foreground/70 text-center">
                {`${formatDate(data)} - ${formatTime(data)}`}
              </p>
            </div>
            <div className="h-full max-h-[calc(100vh-224px)] sm:max-h-96 overflow-y-auto border-none sm:border rounded-b-2xl flex flex-col items-start min-h-96 px-0 py-5 sm:p-4 gap-6">
              {chat.map((message, index) => (
                <div
                  key={message + index}
                  className={`flex gap-3 w-full ${index % 2 !== 0 ? "flex-row-reverse ml-auto" : "flex-row"}`}
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
                        <PiRobot className="w-4 h-4" />
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
                    <div className="text-sm">{message}</div>
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
        {!isLoading ? (
          <div className="flex items-center gap-2 mt-auto">
            <PiSpinnerGap className="h-4 w-4 animate-spin" />
            <span className="text-gray-500">Jorge IA está pensando...</span>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-auto">
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
                      <FormMessage className="absolute -bottom-5" />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
