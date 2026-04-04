import { cn } from "../../lib/utils";

export const Card = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm",
        className,
      )}
      {...props}
    />
  );
};

export const CardHeader = ({ className, ...props }) => {
  return <div className={cn("p-4 border-b", className)} {...props} />;
};

export const CardTitle = ({ className, ...props }) => {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
};

export const CardDescription = ({ className, ...props }) => {
  return (
    <div
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
};

export const CardAction = ({ className, ...props }) => {
  return <div className={cn("p-4 flex justify-end", className)} {...props} />;
};

export const CardContent = ({ className, ...props }) => {
  return <div className={cn("p-4", className)} {...props} />;
};

export const CardFooter = ({ className, ...props }) => {
  return <div className={cn("p-4 border-t", className)} {...props} />;
};
