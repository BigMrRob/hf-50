"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  state: z.string().min(2, "Please enter your state"),
});

export function WaitlistForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      state: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base text-white">Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} className="h-9 md:h-10 text-sm md:text-base bg-[#262626] border-[#404040] text-white" />
              </FormControl>
              <FormMessage className="text-xs md:text-sm text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base text-white">Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} type="email" className="h-9 md:h-10 text-sm md:text-base bg-[#262626] border-[#404040] text-white" />
              </FormControl>
              <FormMessage className="text-xs md:text-sm text-red-400" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm md:text-base text-white">State</FormLabel>
              <FormControl>
                <Input placeholder="Tennessee" {...field} className="h-9 md:h-10 text-sm md:text-base bg-[#262626] border-[#404040] text-white" />
              </FormControl>
              <FormMessage className="text-xs md:text-sm text-red-400" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full h-9 md:h-10 text-sm md:text-base bg-[#e65c25] hover:bg-[#d14e1c]">
          Join Waitlist
        </Button>
      </form>
    </Form>
  );
} 