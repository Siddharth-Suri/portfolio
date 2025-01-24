import { memo } from "react";
import { useRecoilState } from "recoil";
import { ModalState } from "../../state/ModalState";

export const PaymentModal = memo(() => {
    const [currentModal, setCurrentModal] = useRecoilState(ModalState);
    const closeModal = () => {
        setCurrentModal(false);
    };
    return (
        <div className="grid ">
            {currentModal && (
                <div>
                    <div className="p-4 text-white">coffee prices</div>
                    <div
                        className="p-4 cursor-pointer hover:underline hover:text-red-500"
                        onClick={closeModal}
                    >
                        close model
                    </div>
                </div>
            )}
        </div>
    );
});
