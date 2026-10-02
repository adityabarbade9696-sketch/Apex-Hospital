import React, { useState } from 'react';
import { X, FileText, Download, Printer, Search, CheckCircle, ShieldCheck } from 'lucide-react';

interface PatientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PatientPortalModal: React.FC<PatientPortalModalProps> = ({
  isOpen,
  onClose
}) => {
  const [identifier, setIdentifier] = useState('AMH-78241');
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Apex Patient Diagnostic Portal
              </h3>
              <p className="text-[11px] text-cyan-300">
                Secure NABL-Accredited Central Diagnostic Laboratory
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Enter Patient UHID (e.g. AMH-78241) or Registered Mobile..."
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
          <button
            onClick={() => setHasSearched(true)}
            className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-800 rounded-lg cursor-pointer"
          >
            Search Records
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {hasSearched ? (
            <div className="space-y-4">
              {/* Patient Identifier Banner */}
              <div className="p-3.5 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-cyan-900 block">
                    Patient: Rajesh S. Shinde (Age: 52, Male)
                  </span>
                  <span className="text-cyan-700 text-[11px]">
                    UHID: {identifier || 'AMH-78241'} · Reg. Date: 12-Sep-2026
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-700 font-semibold text-[11px] bg-emerald-100/60 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Electronic Record</span>
                </div>
              </div>

              {/* Reports List */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Available Verified Clinical Reports:
                </div>

                {/* Report 1: CBC */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Complete Blood Count (CBC) with Automated Differential
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Tested: 28-Sep-2026 · Specimen: EDTA Whole Blood · NABL Certified
                      </p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-cyan-800 bg-white border border-cyan-200 rounded-lg hover:bg-cyan-50 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Hemoglobin:</span>
                      <span className="font-bold text-slate-800">14.6 g/dL</span>
                      <span className="text-[10px] text-emerald-600 block">(Normal: 13.0 - 17.0)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Total Leukocyte (WBC):</span>
                      <span className="font-bold text-slate-800">7,400 /mcL</span>
                      <span className="text-[10px] text-emerald-600 block">(Normal: 4,000 - 11,000)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Platelet Count:</span>
                      <span className="font-bold text-slate-800">2.45 Lakh /mcL</span>
                      <span className="text-[10px] text-emerald-600 block">(Normal: 1.5 - 4.5)</span>
                    </div>
                  </div>
                </div>

                {/* Report 2: Lipid Profile */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        Comprehensive Lipid Profile (Fasting 12 Hrs)
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Tested: 28-Sep-2026 · Specimen: Serum · Department of Biochemistry
                      </p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-cyan-800 bg-white border border-cyan-200 rounded-lg hover:bg-cyan-50 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Total Cholesterol:</span>
                      <span className="font-bold text-slate-800">182 mg/dL</span>
                      <span className="text-[10px] text-emerald-600 block">(Desirable &lt; 200)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">HDL (Good) Cholesterol:</span>
                      <span className="font-bold text-slate-800">46 mg/dL</span>
                      <span className="text-[10px] text-emerald-600 block">(Optimal &gt; 40)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Serum Triglycerides:</span>
                      <span className="font-bold text-amber-700">165 mg/dL</span>
                      <span className="text-[10px] text-amber-600 block">(Borderline High)</span>
                    </div>
                  </div>
                </div>

                {/* Report 3: 2D Echo */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">
                        2D Echocardiography & Color Doppler Study
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Examined by: Dr. Anand K. Varma, FACC · Apex Heart Institute
                      </p>
                    </div>
                    <button
                      onClick={() => window.print()}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-cyan-800 bg-white border border-cyan-200 rounded-lg hover:bg-cyan-50 cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                  <div className="text-xs text-slate-700 pt-2 border-t border-slate-200 space-y-1">
                    <div><strong>Impression:</strong> Normal Left Ventricular dimensions. Good LV systolic function (LVEF: 60-62%). No regional wall motion abnormality. Grade I LV Diastolic Dysfunction.</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              Enter your UHID to access your electronic reports
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Need past radiology films (CT/MRI)? Visit Central Radiology Ground Floor.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            Close Portal
          </button>
        </div>
      </div>
    </div>
  );
};
