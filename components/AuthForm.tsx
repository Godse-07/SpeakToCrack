"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormDescription
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import { log } from "console"
import FormField from "./FormField"
import { useRouter } from "next/navigation"


const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(1, { message: "Username is required" }) : z.string().optional(),
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    })
}


function AuthForm({type}: {type: FormType}) {

    const rounter = useRouter()

    const formSchema = authFormSchema(type)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          email: "",
          password: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        try{
            if(type ==='sign-up'){
                toast.success("Account created successfully. Please sign in")
                console.log('SIGN up', values);
                rounter.push("/sign-in")
            }else{
                toast.success("Logged in successfully")
                console.log('SIGN in', values);
                rounter.push("/")
            }
        }catch (error){
            console.log("Error", error);
            toast.error("Something went wrong")
        }
      }

      const isSignIn = type === "sign-in"
      const isSignUp = type === "sign-up"

  return (
    <div className="card-border lg:min-w[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flex flex-row gap-2 justify-center">
                <Image src={"logo.svg"} alt="logo" height={32} width={38}/>
                <h2 className="text-primary-100">SpeakToCrack</h2>
            </div>
            <h3>
                Talk your way to the job.
            </h3>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form">
                    {!isSignIn && (<FormField control={form.control} name="name" label="Username" placeholder="Your Name" />)} 
                    <FormField control={form.control} name="email" label="Email" placeholder="Your Email" type="email"/>
                    <FormField control={form.control} name="password" label="password" placeholder="Your Password" type="password"/>
                    {isSignUp && (
                        <FormDescription>
                            Password must be at least 8 characters long
                        </FormDescription>
                    )}
                    <Button type="submit" className="btn">{isSignIn ? "Sign in" : "Create an Account"}</Button>
                </form>
            </Form>
            <p className="text-center">
                {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
                <Link href={isSignIn ? "/sign-up" : "/sign-in"} className="text-primary-100 font-semibold hover:underline">
                    {isSignIn ? "Create an account" : "Sign in"}
                </Link>
            </p>
        </div>
    </div>
  )
}

export default AuthForm