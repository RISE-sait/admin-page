"use server";

import { revalidateTag } from "next/cache";

export default async function revalidateClients() {
  revalidateTag("/manage/clients");
}