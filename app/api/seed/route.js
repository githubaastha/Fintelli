import { seedTransactions } from "@/actions/seed";

export async function GET() {
    const Result=await seedTransactions();
    return Response.json(Result);
    }