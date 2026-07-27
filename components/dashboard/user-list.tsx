"use client";

import Image from "next/image";
import { useState } from "react";
import { useUsers } from "@/lib/hooks/use-users";

function UserCardSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-[10px] border border-[#e5e5e5] p-4">
      <div className="size-12 shrink-0 animate-pulse rounded-full bg-[#f0f0f0]" />
      <div className="flex flex-1 flex-col gap-2">
        <div className="h-4 w-1/3 animate-pulse rounded bg-[#f0f0f0]" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-[#f0f0f0]" />
      </div>
    </div>
  );
}

export function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useUsers(page);

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-[10px] border border-[#e5e5e5] py-16 text-center">
        <p className="text-base font-medium text-black">Couldn&apos;t load hosts</p>
        <p className="text-sm text-[#808080]">Something went wrong. Please try again.</p>
        <button
          onClick={() => refetch()}
          className="mt-2 rounded-[10px] bg-[#ff5037] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-[10px] border border-dashed border-[#e5e5e5] py-16 text-center">
        <p className="text-base font-medium text-black">No hosts found</p>
        <p className="text-sm text-[#808080]">Check back later for new venue hosts.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {data.data.map((user) => (
          <div
            key={user.id}
            className="flex items-center gap-4 rounded-[10px] border border-[#e5e5e5] p-4 transition-colors hover:border-[#ff5037]"
          >
            <Image
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              width={48}
              height={48}
              className="size-12 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-black">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-xs text-[#808080]">{user.email}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
          className="rounded-[10px] border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-black transition-colors hover:border-[#ff5037] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>
        <span className="text-sm text-[#808080]">
          Page {data.page} of {data.total_pages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(data.total_pages, p + 1))}
          disabled={page >= data.total_pages}
          className="rounded-[10px] border border-[#e5e5e5] px-4 py-2 text-sm font-medium text-black transition-colors hover:border-[#ff5037] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
