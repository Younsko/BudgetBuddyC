import React, { useState } from 'react';
import { X, QrCode, Camera, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanComplete: (transaction: any) => void;
}

export function QRScannerModal({ isOpen, onClose, onScanComplete }: QRScannerModalProps) {
  const [isScanning, setIsScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  if (!isOpen) return null;

  const handleScan = () => {
    setIsScanning(true);
    
    // Simulate scanning delay
    setTimeout(() => {
      const mockTransaction = {
        id: Date.now().toString(),
        merchant: 'Scanned Item',
        amount: -10.00,
        category: 'Shopping',
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        type: 'expense' as const,
      };
      
      setIsScanning(false);
      setScanned(true);
      
      setTimeout(() => {
        onScanComplete(mockTransaction);
        setScanned(false);
        onClose();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
            {scanned ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <QrCode className="w-10 h-10 text-white" />
            )}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {scanned ? 'Transaction Added!' : 'Scan QR Code'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {scanned 
              ? 'Your transaction has been successfully recorded' 
              : 'Position the QR code within the frame to scan'}
          </p>

          {!isScanning && !scanned && (
            <div className="mb-8">
              <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-blue-500 dark:border-blue-400 rounded-2xl relative">
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-blue-500 dark:border-blue-400 rounded-tl-xl"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-blue-500 dark:border-blue-400 rounded-tr-xl"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-blue-500 dark:border-blue-400 rounded-bl-xl"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-blue-500 dark:border-blue-400 rounded-br-xl"></div>
                    
                    <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-gray-400 dark:text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {isScanning && (
            <div className="mb-8">
              <div className="relative w-64 h-64 mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 border-4 border-blue-500 dark:border-blue-400 rounded-2xl relative">
                    <div className="absolute inset-0 overflow-hidden">
                      <div className="scan-line"></div>
                    </div>
                    <Camera className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-500 dark:text-blue-400" />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-blue-600 dark:text-blue-400 font-medium animate-pulse">
                Scanning...
              </p>
            </div>
          )}

          {!scanned && (
            <Button
              onClick={handleScan}
              variant="primary"
              size="lg"
              className="w-full"
              disabled={isScanning}
            >
              {isScanning ? 'Scanning...' : 'Start Scanning'}
            </Button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scanAnimation {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(200%);
          }
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          animation: scanAnimation 2s linear infinite;
          box-shadow: 0 0 10px #3b82f6;
        }
      `}</style>
    </div>
  );
}