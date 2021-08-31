import { bizUrl } from "@/utils/utils";
import { POST } from "@/utils/request";

export const queryCurrentUser = async (params: any) => {
  return POST(bizUrl("/api/user/currentUser"), params);
}

