import { removeItem } from "@/storefront/actions/cart";
import { Spinner, Trash } from "@medusajs/icons";
import { clx } from "@medusajs/ui";
import clsx from "clsx";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton({ children }: { children?: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex gap-x-1 text-ui-fg-subtle hover:text-ui-fg-base cursor-pointer"
      aria-disabled={pending}
      type="submit"
      aria-label="Remove cart item"
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
    >
      {pending ? <Spinner className="animate-spin" /> : <Trash />}
      <span>{children}</span>
    </button>
  );
}

const DeleteButton = ({
  id,
  children,
  className,
}: {
  id: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [message, formAction] = useFormState(removeItem, null);
  const actionWithVariant = formAction.bind(null, id);

  return (
    <form
      action={actionWithVariant}
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
};

export default DeleteButton;
