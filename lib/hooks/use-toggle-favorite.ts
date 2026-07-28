import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useFavoritesStore } from "@/store/favorites-store";

// There's no real backend for favorites, so this simulates a network call
// (latency + an occasional failure) purely to exercise the optimistic
// update + rollback pattern end-to-end.
async function mockToggleFavoriteRequest(venueId: string): Promise<{ id: string }> {
  await new Promise((resolve) => setTimeout(resolve, 350));
  if (Math.random() < 0.1) {
    throw new Error("Failed to update favorite");
  }
  return { id: venueId };
}

export function useToggleFavorite() {
  const toggleFavorite = useFavoritesStore((s) => s.toggleFavorite);

  return useMutation({
    mutationFn: (venueId: string) => mockToggleFavoriteRequest(venueId),
    onMutate: (venueId: string) => {
      // Flip the UI immediately, before the "request" resolves.
      toggleFavorite(venueId);
      return { venueId };
    },
    onError: (_error, _venueId, context) => {
      // Roll back to the pre-mutation state on failure.
      if (context) toggleFavorite(context.venueId);
      toast.error("Couldn't update favorites. Please try again.");
    },
  });
}
