import { z } from "zod";
const createSchema = z.object({
    title: z.string().min(3, {message: "Must Password Be 3 Characters At Least"}),
    price: z.string().min(1 ,{message: "Price is Required"}),
})

export {createSchema}