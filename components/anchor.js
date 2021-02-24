export default function Anchor({
    href,
    target,
    rel,
    className,
    text,
    children,
}) {
    return (
        <a
            href={href}
            target={target || "_blank"}
            rel={rel || "noopener noreferrer"}
            className={className}
        >
            {text}
            {children}
        </a>
    );
}
