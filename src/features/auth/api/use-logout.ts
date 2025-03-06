import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AppType } from "@/app/api/[[...route]]/route";
import { client } from "@/lib/rpc";
import { InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type ResponseType = InferResponseType<(typeof client.api.auth.logout)["$post"]>;

export const useLogout = () => {
  const rounter = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.auth.logout["$post"]();
      if (!response.ok) {
        throw new Error("Failed to log out");
      }
      return await response.json();
    },
    onSuccess: () => {
      toast.success("Logged out");
      rounter.refresh();
      queryClient.invalidateQueries({ queryKey: ["current"] });
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
    },
    onError: () => {
      toast.error("Failed to log out");
    },
  });
  return mutation;
};
