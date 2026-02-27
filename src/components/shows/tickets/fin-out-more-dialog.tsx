import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface FindOutMoreDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function FindOutMoreDialog({ open, onOpenChange }: FindOutMoreDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogTitle className="text-lg font-semibold mb-2">
                    Descrição do ingresso
                </DialogTitle>
                <p className="text-base text-gray-600">
                    Clientes que não se enquadram na opção de meia podem adquirir este ingresso levando a doação do alimento no dia do evento.
                </p>
            </DialogContent>
        </Dialog>
    );
}