"use client";
import { sendEmail } from "@/actions/send-email";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEnvelopeSimple } from "react-icons/pi";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Nome é obrigatório" })
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, {
      message: "Nome deve conter apenas letras e espaços",
    })
    .refine(
      (value) => {
        const parts = value.trim().split(/\s+/);
        return parts.length >= 2 && parts.every((part) => part.length >= 2);
      },
      {
        message: "Informe nome e sobrenome",
      }
    ),
  email: z.email({
    message: "Email inválido",
  }),
  message: z.string().min(10, {
    message: "Mensagem deve ter pelo menos 10 caracteres",
  }),
});

export type SendMailFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SendMailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(formData: SendMailFormValues) {
    console.log(form.formState.errors);

    await sendEmail(formData)
      .then(() => {
        form.reset();
        setIsLoading(false);
        toast("Mensagem enviada com sucesso!");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(`Erro ao enviar mensagem: ${error.message}`);
      });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="mt-4 hover:animate-jump"
          variant="download"
          size="lg"
        >
          <PiEnvelopeSimple />
          Contato
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center gap-2">
          <div
            className="flex size-11 shrink-0 items-center justify-center rounded-full border"
            aria-hidden="true"
          >
            <PiEnvelopeSimple size={24} />
          </div>
          <DialogHeader>
            <DialogTitle className="sm:text-center">
              Entre em contato
            </DialogTitle>
            <DialogDescription className="sm:text-center">
              Preencha o formulário abaixo para enviar uma mensagem.
              Responderemos o mais breve possível.
            </DialogDescription>
          </DialogHeader>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="text-left">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Nome completo</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite seu nome"
                        type="text"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="seu@email.com"
                        type="email"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Digite sua mensagem"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage className="absolute -bottom-5" />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              className="w-full mt-10"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  Enviando mensagem
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Enviar mensagem
                  <SendHorizonal className="mr-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
