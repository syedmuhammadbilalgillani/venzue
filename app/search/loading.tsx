function VenueCardSkeleton() {
  return (
    <div className="flex w-full flex-col overflow-hidden rounded-[20px] min-h-full">
      <div className="h-[250px] w-full animate-pulse rounded-t-[20px] bg-[#e4e4e4]" />
      <div className="flex flex-col gap-3.5 rounded-b-[20px] border border-[#e5e5e5] bg-white p-3.5">
        <div className="h-4 w-3/4 animate-pulse rounded bg-[#f0f0f0]" />
        <div className="-mt-2 h-3 w-1/2 animate-pulse rounded bg-[#f0f0f0]" />
        <div className="flex gap-1.5">
          <div className="h-5 w-14 animate-pulse rounded-full bg-[#f0f0f0]" />
          <div className="h-5 w-14 animate-pulse rounded-full bg-[#f0f0f0]" />
          <div className="h-5 w-14 animate-pulse rounded-full bg-[#f0f0f0]" />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="h-4 w-24 animate-pulse rounded bg-[#f0f0f0]" />
          <div className="h-7 w-24 animate-pulse rounded-[10px] bg-[#f0f0f0]" />
        </div>
      </div>
    </div>
  );
}

export default function SearchLoading() {
  return (
    <main className="min-h-dvh bg-white">
      <div className="sticky top-0 z-20 h-[70px] animate-pulse border-b border-[#d0d0d0] bg-[#f9fafb]" />
      <div className="sticky top-0 z-20 h-[112px] animate-pulse border-b border-[#d0d0d0] bg-white" />

      <div className="relative flex gap-6 px-6 pb-10">
        <div className="flex-1 overflow-auto">
          <div className="flex items-center justify-between pt-2">
            <div className="h-4 w-40 animate-pulse rounded bg-[#f0f0f0]" />
            <div className="h-8 w-24 animate-pulse rounded-full bg-[#f0f0f0]" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <VenueCardSkeleton key={i} />
            ))}
          </div>
        </div>

        <div className="sticky top-36 hidden h-[700px] max-h-[75dvh] w-[421px] animate-pulse rounded-[20px] bg-[#e4e4e4] lg:block" />
      </div>
    </main>
  );
}
