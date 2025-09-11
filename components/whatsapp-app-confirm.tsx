"use client";
import { useState } from "react";
import { WHATSAPP_NUMBER_STR } from "@/config/config";

interface WhatsAppConfirmProps {
  message: string;
  onClose: () => void;
}

export function WhatsAppConfirm({ message, onClose }: WhatsAppConfirmProps) {
  const [showConfirm, setShowConfirm] = useState(false);

  const phone = WHATSAPP_NUMBER_STR;

  const encodedMessage = encodeURIComponent(message);

  const openWhatsApp = () => {
    if (!phone) {
      return;
    }
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isMobile) {
      if (isIOS) {
        window.location.href = `whatsapp://send?phone=${phone}&text=${encodedMessage}`;
      } else if (isAndroid) {
        window.location.href = `intent://send?phone=${phone}&text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp;end`;
      } else {
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
      }
      setTimeout(() => {
        window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
      }, 3000);
    } else {
      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm w-full">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Confirmar envio
        </h2>
        <p className="text-gray-700 mb-6">
          Deseja realmente enviar esta mensagem pelo WhatsApp?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Cancelar
          </button>
          <button
            onClick={openWhatsApp}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}
