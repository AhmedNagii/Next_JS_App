import { IAccount } from "@/database/account.model";
import { IUser } from "@/database/user.model";
import { fetchHandler } from "./handlers/fetch";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000/api";

export const api = {
  auth: {
    oAuthSignIn: ({ user, provider, providerAccountId }: SignInWithOAuthParams) =>
      fetchHandler(`${API_BASE_URL}/auth/signin-with-oauth`, {
        method: "POST",
        body: JSON.stringify({ user, provider, providerAccountId }),
      }),
  },
  users: {
    getAll: async () => fetchHandler(`${API_BASE_URL}/users`),
    getById: async (id: string) => fetchHandler(`${API_BASE_URL}/users/${id}`),
    getByEmail: async (email: string) =>
      fetchHandler(`${API_BASE_URL}/users/email/`, {
        method: "POST",
        body: JSON.stringify({ email }),
      }),
    create: async (userData: Partial<IUser>) =>
      fetchHandler(`${API_BASE_URL}/users`, {
        method: "POST",
        body: JSON.stringify(userData),
      }),
    update: async (id: string, userData: Partial<IUser>) =>
      fetchHandler(`${API_BASE_URL}/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(userData),
      }),
    delete: async (id: string) =>
      fetchHandler(`${API_BASE_URL}/users/${id}`, {
        method: "DELETE",
      }),
  },
  accounts: {
    getAll: async () => fetchHandler(`${API_BASE_URL}/accounts`),
    getById: async (id: string) => fetchHandler(`${API_BASE_URL}/accounts/${id}`),
    getByProvider: async (providerAccountId: string) =>
      fetchHandler(`${API_BASE_URL}/accounts/provider/`, {
        method: "POST",
        body: JSON.stringify({ providerAccountId }),
      }),
    create: async (accountData: Partial<IAccount>) =>
      fetchHandler(`${API_BASE_URL}/accounts`, {
        method: "POST",
        body: JSON.stringify(accountData),
      }),
    update: async (id: string, accountData: Partial<IAccount>) =>
      fetchHandler(`${API_BASE_URL}/accounts/${id}`, {
        method: "PUT",
        body: JSON.stringify(accountData),
      }),
    delete: async (id: string) =>
      fetchHandler(`${API_BASE_URL}/accounts/${id}`, {
        method: "DELETE",
      }),
  },
  ai: {
    getAnswer: (question: string, content: string): APIResponse<string> =>
      fetchHandler(`${API_BASE_URL}/ai/answers`, {
        method: "POST",
        body: JSON.stringify({ question, content }),
      }),
  },
};
