import { Errors } from "@/app/api/errors/errors";
import { signinSchema } from "@/app/api/signin/schema";
import { authenticateService } from "@/app/api/auth-service";
import { ZodError } from "zod";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { email, password } = signinSchema.parse(data);

    const token = await authenticateService(email, password);

    return Response.json({ token });
  } catch (error: any) {
    if (error instanceof ZodError) {
      return Response.json({ error: error.issues }, { status: 400 });
    }
    const typeError = Errors(error.message);
    return Response.json(
      { error: typeError?.message },
      { status: typeError?.status },
    );
  }
}
