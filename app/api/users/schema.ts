import {z} from 'zod';

const schema = z.object({
    email: z.string().min(3),
    password: z.string().min(4)
});

export default schema;