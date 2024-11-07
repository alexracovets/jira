import "server-only";

import { AUTH_COOKIE } from "@/features/auth/constants";
import { createMiddleware } from 'hono/factory';
import { getCookie } from "hono/cookie";
import {
    Account,
    Client,
    Databases,
    Models,
    Storage,
    type Account as AccountType,
    type Databases as DatabasesType,
    type Storage as StorageType
} from "node-appwrite";

type AdditionalContext = {
    Variables: {
        account: AccountType,
        databases: DatabasesType,
        storage: StorageType,
        user: Models.User<Models.Preferences>
    }
}

export const sessionMiddleware = createMiddleware<AdditionalContext>(
    async (c, next) => {
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

        const session = getCookie(c, AUTH_COOKIE);

        if (!session) {
            return c.json({ error: "Unauthorized" }, 401);
        }

        client.setSession(session);

        const account = new Account(client);
        const database = new Databases(client);
        const storage = new Storage(client);

        const user = await account.get();

        c.set("account", account);
        c.set("databases", database);
        c.set("storage", storage);
        c.set("user", user);

        await next();
    }
)