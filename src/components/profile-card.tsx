import { profile } from "@/content/profile";
import { whatsappHref } from "@/lib/site";

import { ArrowUpRight } from "./icons";

export function ProfileCard() {
  return (
    <aside className="overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ff5f56]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span aria-hidden="true" className="size-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-muted">profile.json</span>
      </div>

      <div className="p-4 font-mono text-[0.78rem] leading-relaxed sm:p-5 sm:text-[0.82rem]">
        <p className="text-muted">$ cat profile.json</p>
        <p className="mt-2 text-muted">{"{"}</p>
        <p className="pl-4">
          <span className="text-accent">&quot;name&quot;</span>:{" "}
          <span className="text-ink">&quot;{profile.name}&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-accent">&quot;role&quot;</span>:{" "}
          <span className="text-ink">
            &quot;{profile.education} · Web developer&quot;
          </span>
          ,
        </p>
        <p className="pl-4">
          <span className="text-accent">&quot;location&quot;</span>:{" "}
          <span className="text-ink">&quot;{profile.locationFull}&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-accent">&quot;focus&quot;</span>:{" "}
          <span className="text-ink">&quot;{profile.focus}&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-accent">&quot;stack&quot;</span>: [
        </p>
        {profile.stack.map((item, index) => (
          <p key={item} className="pl-8">
            <span className="text-ink">&quot;{item}&quot;</span>
            {index < profile.stack.length - 1 ? "," : ""}
          </p>
        ))}
        <p className="pl-4">],</p>
        <p className="pl-4">
          <span className="text-accent">&quot;status&quot;</span>:{" "}
          <span className="text-accent">&quot;{profile.availability}&quot;</span>
        </p>
        <p className="text-muted">{"}"}</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line px-4 py-3 text-sm sm:px-5">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
        >
          github
          <ArrowUpRight className="size-3.5" />
        </a>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
        >
          whatsapp
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </aside>
  );
}