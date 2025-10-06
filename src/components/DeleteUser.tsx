

type DeleteUserProps = {
    message?: string
    onConfirm: () => void
    onCancel: () => void
    isDeleting?: boolean
}

export default function DeleteUser({
    message = "¿Deseas eliminar este usuario?",
    onConfirm,
    onCancel,
    isDeleting = false
}: DeleteUserProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
            <div
                role="alert"
                className="alert alert-vertical sm:alert-horizontal bg-base-200 shadow-lg"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-info h-6 w-6 shrink-0"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>{message}</span>
                <div className="flex gap-2">
                    <button className="btn btn-sm" onClick={onCancel}>
                        No
                    </button>
                    <button
                        className="btn btn-sm btn-primary"
                        onClick={onConfirm}
                        disabled={isDeleting}
                    >
                        {isDeleting ? "Eliminando..." : "Sí"}
                    </button>
                </div>
            </div>
        </div>
    )
}
