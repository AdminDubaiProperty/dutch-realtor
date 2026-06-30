import Link from "next/link";

function inlineFormat(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      const external = href.startsWith("http");
      if (external) {
        return <a key={index} href={href} target="_blank" rel="noreferrer" className="text-gold-300 underline underline-offset-4 hover:text-gold-200">{link[1]}</a>;
      }
      return <Link key={index} href={href} className="text-gold-300 underline underline-offset-4 hover:text-gold-200">{link[1]}</Link>;
    }
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    return part;
  });
}

export function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const nodes: React.ReactNode[] = [];
  let listItems: string[] = [];
  let orderedItems: string[] = [];

  function flushLists() {
    if (listItems.length) {
      nodes.push(
        <ul key={`ul-${nodes.length}`} className="my-6 space-y-2 list-disc pl-6 text-dark-50/75">
          {listItems.map((item) => <li key={item}>{inlineFormat(item)}</li>)}
        </ul>
      );
      listItems = [];
    }
    if (orderedItems.length) {
      nodes.push(
        <ol key={`ol-${nodes.length}`} className="my-6 space-y-2 list-decimal pl-6 text-dark-50/75">
          {orderedItems.map((item) => <li key={item}>{inlineFormat(item)}</li>)}
        </ol>
      );
      orderedItems = [];
    }
  }

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushLists();
      continue;
    }
    if (trimmed.startsWith("- ")) {
      orderedItems = [];
      listItems.push(trimmed.slice(2));
      continue;
    }
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (ordered) {
      listItems = [];
      orderedItems.push(ordered[1]);
      continue;
    }
    flushLists();
    if (trimmed.startsWith("### ")) {
      nodes.push(<h3 key={nodes.length} className="font-heading text-2xl text-dark-50 mt-10 mb-3">{inlineFormat(trimmed.slice(4))}</h3>);
    } else if (trimmed.startsWith("## ")) {
      nodes.push(<h2 key={nodes.length} className="font-heading text-3xl text-dark-50 mt-14 mb-4">{inlineFormat(trimmed.slice(3))}</h2>);
    } else if (trimmed.startsWith("> ")) {
      nodes.push(<blockquote key={nodes.length} className="my-8 border-l-4 border-gold-400 pl-5 text-xl text-dark-50/80 italic">{inlineFormat(trimmed.slice(2))}</blockquote>);
    } else {
      nodes.push(<p key={nodes.length} className="my-5 leading-8 text-dark-50/75">{inlineFormat(trimmed)}</p>);
    }
  }
  flushLists();
  return <div className="prose prose-invert max-w-none">{nodes}</div>;
}
