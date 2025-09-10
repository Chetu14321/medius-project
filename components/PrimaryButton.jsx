import Link from "next/link";

export default function PrimaryButton({ href, children, variant }) {
  const style = {
    padding: "0.75rem 1.5rem",
    margin: "0.5rem",
    borderRadius: "8px",
    border: "none",
    background: variant === "secondary" ? "#ddd" : "#0070f3",
    color: variant === "secondary" ? "#111" : "#fff",
    textDecoration: "none",
  };

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}
