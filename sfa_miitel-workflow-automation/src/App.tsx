/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Clipboard, 
  Check, 
  Terminal, 
  Zap, 
  AlertTriangle, 
  Info, 
  Settings, 
  Monitor, 
  MousePointerClick, 
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Original scripts preserved exactly as per user content
const SCRIPTS = {
  SFA_NEW: "javascript:(function() {var L = 1775055599000, W = 0, CD = 2, R = 20, T = \"\u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u300c\u5bfe\u5fdc\u4e2d\u300d\", H = \"\u3010HIT\u3011\u5bfe\u5fdc\u4e2d\", S = \"\u5bfe\u5fdc\";if (Date.now() > L) { alert(\"\u671f\u9650\u5207\u308c\"); return; }var r = !1, c = !1, w = null, tl = null, ot = document.title;var obs = null;var _c = document.getElementById(\"_ui_p\");if (_c) _c.remove();var d = document.createElement(\"div\");d.id = \"_ui_p\";d.style.cssText = \"position: fixed; top: 0; left: 0; z-index: 999999;background: #121212; color: #e0e0e0;width: 260px; height: 45px;padding: 0 12px;border: 1px solid #333; border-radius: 8px;box-shadow: 0 4px 20px rgba(0,0,0,0.6);font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;font-size: 13px;display: flex; align-items: center; justify-content: space-between;cursor: move; user-select: none; box-sizing: border-box;\";d.innerHTML = \"<div style='display:flex; flex-direction:column; justify-content:center;'><span id='st' style='font-weight:bold; letter-spacing:0.5px;'>\u25a0 \u505c\u6b62\u4e2d</span><span style='font-size:9px; color:#666;'>Ctrl + M to Toggle</span></div><div style='display:flex; gap:6px; align-items:center;'><button id='lm' style='cursor:pointer; background:#2a2a2a; color:#fff; border:1px solid #444; border-radius:4px; padding:4px 8px; font-size:11px;'>R:\" + R + \"</button><button id='bn' style='cursor:pointer; background:#28a745; color:#fff; border:none; border-radius:4px; padding:6px 14px; font-weight:600; transition:all 0.2s;'>\u958b\u59cb</button></div>\";document.body.appendChild(d);var es = d.querySelector(\"#st\"), el = d.querySelector(\"#lm\"), eb = d.querySelector(\"#bn\");var _a = false, _b = { x: 0, y: 0 };d.addEventListener('mousedown', function(e) { _a = true; _b.x = e.clientX - d.offsetLeft; _b.y = e.clientY - d.offsetTop; d.style.opacity = \"0.8\"; });document.addEventListener('mousemove', function(e) { if (_a) { d.style.left = (e.clientX - _b.x) + 'px'; d.style.top = (e.clientY - _b.y) + 'px'; } });document.addEventListener('mouseup', function() { _a = false; d.style.opacity = \"1.0\"; });window.addEventListener('keydown', function(e) { if (e.ctrlKey && e.key.toLowerCase() === 'm') { e.preventDefault(); eb.click(); } });function U() { if (c) { es.innerText = \"\ud83d\udcde BUSY (2m)\"; es.style.color = \"#00ffcc\"; eb.innerText = \"\u4f11\u686e\u4e2d\"; eb.style.background = \"#555\"; } else { es.innerText = r ? \"\u25b6 \u8d77\u52d5\u4e2d\" : \"\u25a0 \u505c\u6b62\u4e2d\"; es.style.color = r ? \"#00ff88\" : \"#888\"; eb.innerText = r ? \"\u505c\u6b62\" : \"\u958b\u59cb\"; eb.style.background = r ? \"#dc3545\" : \"#28a745\"; } el.innerText = \"R:\" + R; }function IW() { if (w) w.terminate(); var b = new Blob([\"setInterval(()=>postMessage('t'),10)\"]); w = new Worker(URL.createObjectURL(b)); w.onmessage = function() { if (r && !c) CL(); }; }function LT(x) { if (document.title.indexOf(\"\u3010HIT\u3011\") === -1) ot = document.title; if (tl) clearInterval(tl); document.title = x; tl = setInterval(function() { document.title = x; }, 100); }function UT() { if (tl) clearInterval(tl); tl = null; if (ot) document.title = ot; }function VF() { var k = 0, _d = setInterval(function() { k++; var _e = document.body.innerText || \"\"; if (_e.indexOf(T) !== -1) { clearInterval(_d); r = !1; if (w) w.terminate(); if (obs) obs.disconnect(); UT(); U(); try { new Audio(\"data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU\").play(); } catch (e) {} } else if (k > 40) { clearInterval(_d); UT(); c = !1; r = !0; U(); } }, 100); }function HT(e) { r = !1; U(); LT(H); setTimeout(function() { if (document.body.contains(e)) e.click(); VF(); }, W); }function GE(n, z) { if (!z) z = []; if (!n) return z; var q = n.querySelectorAll(\"*\"); for (var i = 0; i < q.length; i++) { if (q[i].offsetWidth > 0) z.push(q[i]); if (q[i].shadowRoot) GE(q[i].shadowRoot, z); } return z; }function CL() { if (!r) return; var _f = GE(document), _g = []; for (var i = 0; i < _f.length; i++) { var e = _f[i]; if ((e.tagName == \"BUTTON\" || e.tagName == \"A\") && (e.innerText || \"\").trim() === S) _g.push(e); } _g.sort(function(a, b) { return a.getBoundingClientRect().top - b.getBoundingClientRect().top; }); var _h = _g.slice(0, R); for (var j = _h.length - 1; j >= 0; j--) { var b = _h[j], _i = b.getBoundingClientRect(), y = _i.top + _i.height / 2, h = _f.some(function(x) { if (x === b) return !1; var t = (x.innerText || \"\").trim(); if (t !== \"NEW\") return !1; var _j = x.getBoundingClientRect(); return Math.abs((_j.top + _j.height / 2) - y) < 8; }); if (h) { HT(b); return; } } var u = _f.find(function(e) { var t = (e.innerText || \"\").trim(), ti = (e.getAttribute(\"title\") || \"\").trim(); return e.tagName === \"BUTTON\" && (t === \"\u66f4\u65b0\" || ti === \"\u66f4\u65b0\"); }); if (u) u.click(); }el.onclick = function() { R = R === 10 ? 20 : 10; U(); };eb.onclick = function() { if (r) { r = !1; U(); if (w) w.terminate(); if (obs) obs.disconnect(); UT(); } else { UT(); r = !0; U(); IW(); if (obs) obs.disconnect(); obs = new MutationObserver(function() { if (r && !c) CL(); }); obs.observe(document.body, { childList: !0, subtree: !0, characterData: !0 }); } };})();",
  MIITEL: `javascript:(function(){var L=1782831599000,W=0,TG="\u96fb\u8a71\u306b\u51fa\u308b";if(Date.now()>L){alert("\u671f\u9650\u5207\u308c");return}var r=!1,obs=null,w=null;var ui=document.getElementById("_mu_p");if(ui)ui.remove();var d=document.createElement("div");d.id="_mu_p";d.style.cssText="position:fixed;bottom:0;left:0;z-index:999999;background:#6a0dad;color:#fff;padding:4px;border-top:2px solid #fff;font-size:11px";d.innerHTML="<span id='st'>\u25a0 MiiTel(Ace)</span> <button id='bn'>\u958b\u59cb</button>";document.body.appendChild(d);var es=d.querySelector("#st"),eb=d.querySelector("#bn");function U(){es.innerText=r?"\u25cf \u76e3\u8996\u4e2d":"\u25a0 \u505c\u6b62";eb.innerText=r?"\u505c\u6b62":"\u958b\u59cb"}function CK(){if(!r)return;var xp="//*[contains(text(), '"+TG+"')]",rs=document.evaluate(xp,document,null,7,null);for(var i=0;i<rs.snapshotLength;i++){var el=rs.snapshotItem(i);if(el.offsetParent){setTimeout(function(){el.click();if(el.parentElement&&el.parentElement.tagName==="BUTTON")el.parentElement.click()},W)}}}function ST(){r=!0;U();obs=new MutationObserver(CK);obs.observe(document.body,{childList:!0,subtree:!0});var b=new Blob(["setInterval(()=>postMessage('t'),100)"]);w=new Worker(URL.createObjectURL(b));w.onmessage=CK}function SP(){r=!1;U();if(obs)obs.disconnect();if(w)w.terminate()}eb.onclick=function(){if(r)SP();else ST()}})();`,
  NOTIF_TOOL: `Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
$win32 = @"
using System; using System.Runtime.InteropServices; using System.Text; using System.Collections.Generic;
public class Win32 {
 [DllImport("user32.dll")] public static extern bool EnumWindows(EnumWindowsProc enumProc, IntPtr lParam);
 [DllImport("user32.dll", CharSet = CharSet.Unicode)] public static extern int GetWindowText(IntPtr hWnd, StringBuilder lpString, int nMaxCount);
 [DllImport("user32.dll")] public static extern bool IsWindowVisible(IntPtr hWnd);
 public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);
 public static List<string> GetWindowTitles() {
  List<string> titles = new List<string>();
  EnumWindows(delegate(IntPtr hWnd, IntPtr lParam) {
   if (IsWindowVisible(hWnd)) {
    StringBuilder sb = new StringBuilder(256); GetWindowText(hWnd, sb, sb.Capacity);
    if (sb.Length > 0) titles.Add(sb.ToString());
   } return true;
  }, IntPtr.Zero); return titles;
 }
}
"@
Add-Type -TypeDefinition $win32
$form = New-Object System.Windows.Forms.Form
$form.Text = "SFA Monitor"
$form.Size = New-Object System.Drawing.Size(220, 80)
$form.StartPosition = "Manual"
$form.Location = New-Object System.Drawing.Point(10, 10)
$form.TopMost = $true
$form.Opacity = 0.9
$form.FormBorderStyle = "Sizable"
$form.MaximizeBox = $false
$form.MinimizeBox = $false
$form.BackColor = [System.Drawing.Color]::FromArgb(30, 30, 30)
$label = New-Object System.Windows.Forms.Label
$label.Text = "\u76e3\u8996\u4e2d..."
$label.Font = New-Object System.Drawing.Font("Meiryo UI", 11, [System.Drawing.FontStyle]::Bold)
$label.ForeColor = [System.Drawing.Color]::Gray
$label.AutoSize = $false
$label.TextAlign = "MiddleCenter"
$label.Dock = "Fill"
$form.Controls.Add($label)
$timer = New-Object System.Windows.Forms.Timer
$timer.Interval = 100
$timer.Add_Tick({
 try {
  $titles = [Win32]::GetWindowTitles()
  $hits = @()
  foreach ($t in $titles) {
   if ($t -like "*\u3010HIT\u3011\u5bfe\u5fdc\u4e2d*") { $hits += "\u65b0\u7740\u7372\u5f97" }
   if ($t -like "*\u3010HIT\u30112nd*") { $hits += "2nd\u7372\u5f97" }
   if ($t -like "*\u3010HIT\u3011\u8ffd*") { $hits += "\u8ffd\u3044\u304b\u3051" }
  }
  $uniqueHits = $hits | Select-Object -Unique
  if ($uniqueHits) {
   $msg = $uniqueHits -join " & "
   if ($label.Text -ne $msg) {
    $label.Text = $msg
    $label.ForeColor = [System.Drawing.Color]::White
    if ($uniqueHits -contains "\u65b0\u7740\u7372\u5f97") { $form.BackColor = [System.Drawing.Color]::Purple }
    elseif ($uniqueHits -contains "2nd\u7372\u5f97") { $form.BackColor = [System.Drawing.Color]::DarkRed }
    else { $form.BackColor = [System.Drawing.Color]::DarkOrange }
    [Console]::Beep(2000, 50)
   }
  } else {
   if ($label.Text -ne "\u76e3\u8996\u4e2d...") {
    $label.Text = "\u76e3\u8996\u4e2d..."
    $label.ForeColor = [System.Drawing.Color]::Gray
    $form.BackColor = [System.Drawing.Color]::FromArgb(30, 30, 30)
   }
  }
 } catch {}
})
$timer.Start()
$form.ShowDialog() | Out-Null
$timer.Stop()`
};

interface CodeCardProps {
  id: string;
  title: string;
  value: string;
  isEditable: boolean;
  onUpdate: (val: string) => void;
  accentColor: string;
  isDiscontinued?: boolean;
}

const CodeCard = ({ id, title, value, isEditable, onUpdate, accentColor, isDiscontinued }: CodeCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group ${
        isDiscontinued ? 'opacity-75 grayscale-[0.5]' : ''
      }`}
    >
      <div className={`absolute top-0 left-0 w-1 h-full ${isDiscontinued ? 'bg-slate-400' : accentColor}`} />
      
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-1">
          <h3 className={`text-lg font-bold flex items-center gap-2 ${isDiscontinued ? 'text-slate-500 line-through' : 'text-slate-800'}`}>
            <Terminal size={18} className="text-slate-400 group-hover:text-amber-500 transition-colors" />
            {title}
          </h3>
          {isDiscontinued && (
            <div className="flex items-center gap-1.5 text-rose-600 font-black text-[10px] uppercase tracking-wider">
              <AlertTriangle size={12} />
              現在このスクリプトの展開は停止されています
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {isEditable && (
            <span className="text-[10px] bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-black shadow-sm border border-amber-200">
              編集モード有効
            </span>
          )}
          {isDiscontinued && (
            <span className="text-[10px] bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-black shadow-sm border border-rose-200">
              展開中止
            </span>
          )}
        </div>
      </div>

      <div className="relative">
        {isDiscontinued && (
          <div className="absolute inset-0 z-10 bg-slate-900/5 backdrop-blur-[1px] flex items-center justify-center rounded-xl pointer-events-none">
            <div className="bg-white/90 px-4 py-2 rounded-lg shadow-xl border border-rose-100 flex flex-col items-center gap-1">
              <span className="text-rose-600 font-black text-xs uppercase italic tracking-tighter">展開中止</span>
              <span className="text-[10px] text-slate-500 font-bold">現在は展開を中止しています。</span>
            </div>
          </div>
        )}
        <textarea
          readOnly={!isEditable}
          value={value}
          onChange={(e) => onUpdate(e.target.value)}
          rows={id === 'code-ps' ? 10 : 4}
          className={`w-full font-mono text-xs p-5 rounded-xl bg-slate-950 border transition-all ${
            isDiscontinued 
              ? 'text-slate-500 border-slate-800' 
              : 'text-emerald-400 border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-700'
          } ${
            isEditable ? 'cursor-text ring-2 ring-amber-500/50' : 'cursor-default'
          }`}
        />
        {!isDiscontinued && (
          <button
            onClick={handleCopy}
            className={`absolute bottom-4 right-4 flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold transition-all shadow-xl active:scale-90 border-2 ${
              copied 
                ? 'bg-emerald-500 text-white border-emerald-400' 
                : 'bg-emerald-600 text-white hover:bg-emerald-500 border-emerald-500'
            }`}
          >
            {copied ? <Check size={14} /> : <Clipboard size={14} />}
            {copied ? '✓ コピー完了' : 'コピー'}
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [scripts, setScripts] = useState(SCRIPTS);
  const [activeSegment, setActiveSegment] = useState('overview');
  
  const fabRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'code-new', 'code-miitel', 'code-ps'];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            setActiveSegment(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEditToggle = () => {
    if (isEditMode) {
      if (confirm('保存(DL)して終了しますか？')) {
        handleDownload();
      }
    } else {
      const pw = prompt('編集モード用パスワードを入力してください', '');
      if (pw === '5015') {
        setIsEditMode(true);
      } else if (pw !== null) {
        alert('パスワードが違います');
      }
    }
  };

  const handleDownload = () => {
    document.querySelectorAll('textarea').forEach(ta => {
      ta.textContent = ta.value;
    });
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([`<!DOCTYPE html>\n${htmlContent}`], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setIsEditMode(false);
    location.reload();
  };

  const updateScript = (key: keyof typeof SCRIPTS, val: string) => {
    setScripts(prev => ({ ...prev, [key]: val }));
  };

  const navItems = [
    { id: 'overview', label: '概要・手順', icon: Info },
    { id: 'section-sfa', label: '■ SFA貼付', isHeader: true },
    { id: 'code-new', label: '新着用コード', icon: Zap, sub: true },
    { id: 'code-miitel', label: 'MiiTel用コード', icon: MousePointerClick, sub: true },
    { id: 'section-terminal', label: '■ ターミナル貼付', isHeader: true },
    { id: 'code-ps', label: '通知ツール', icon: Monitor, sub: true },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      <aside className="w-64 bg-slate-900 text-slate-300 h-screen sticky top-0 border-r border-slate-800 flex flex-col shrink-0 z-40">
        <div className="p-8 border-b border-slate-800 bg-slate-950/40">
          <div className="flex items-start gap-3 mb-1">
            <h1 className="font-black text-lg tracking-tight text-white leading-tight">
              SFA / MiiTel<br />
              <span className="text-emerald-400 text-sm">業務効率化ツール</span>
            </h1>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto pt-6 pb-20 no-scrollbar">
          {navItems.map((item) => {
            if (item.isHeader) {
              return (
                <div key={item.id} className="mt-8 mb-3 px-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  {item.label}
                </div>
              );
            }
            const Icon = item.icon!;
            const isActive = activeSegment === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full flex items-center gap-3 px-8 py-3.5 text-sm transition-all relative group ${
                  isActive 
                    ? 'text-white bg-slate-800/60 font-black' 
                    : 'hover:text-white hover:bg-slate-800/40'
                } ${item.sub ? 'pl-10' : ''}`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-indicator" 
                    className="absolute left-0 w-1.5 h-6 bg-emerald-500 rounded-r-full shadow-[0_0_12px_rgba(16,185,129,0.7)]" 
                  />
                )}
                <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-200 transition-colors'} />
                {item.label}
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="flex-1 p-10 max-w-6xl">
        <AnimatePresence>
          {isEditMode && (
            <motion.div 
              initial={{ height: 0, opacity: 0, y: -20 }}
              animate={{ height: 'auto', opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: -20 }}
              className="bg-amber-500 text-white font-black text-center py-3 px-6 rounded-2xl mb-10 flex items-center justify-between gap-4 sticky top-6 z-50 shadow-2xl shadow-amber-500/30 border-2 border-amber-400 overflow-hidden"
            >
              <div className="flex items-center gap-3">
                <Settings size={20} className="animate-spin-slow" />
                <span className="text-sm">【編集モード】修正が完了したらファイルをダウンロードして保存してください。</span>
              </div>
              <button 
                onClick={handleDownload}
                className="bg-white text-amber-600 px-6 py-2 rounded-xl text-xs font-black hover:bg-slate-50 transition-all shadow-md active:scale-95 shrink-0"
              >
                保存(DL)して終了
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <section id="overview" className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 bg-white border border-slate-200 p-10 rounded-[2.5rem] shadow-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 scale-150 pointer-events-none group-hover:rotate-0 transition-transform duration-700">
              <Info size={180} />
            </div>
            <h2 className="text-3xl font-black mb-6 flex items-center gap-4 italic tracking-tight uppercase">
              <Info className="text-blue-500" size={32} /> 概要
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 font-bold text-lg max-w-xl">
              SFAおよびMiiTelの架電業務を最大限効率化するために設計された、専用のワークフロースクリプト管理ハブです。
            </p>
            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 text-blue-700 px-5 py-3 rounded-2xl text-sm font-black shadow-sm ring-4 ring-blue-50/50">
              <Clock size={18} />
              有効期限：2026年6月30日 23:59 まで
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 bg-slate-900 border border-slate-800 p-10 rounded-[2.5rem] shadow-2xl text-white"
          >
            <h2 className="text-2xl font-black mb-8 italic tracking-tight flex items-center gap-4 uppercase">
              <Zap className="text-emerald-400" size={28} /> 操作手順
            </h2>
            <div className="space-y-5">
              {[
                { n: '1', t: 'キーボードの Fn + F12 を押して「デベロッパーツール」を起動します。' },
                { n: '2', t: '上部タブから「Console」パネルを選択してください。' },
                { n: '3', t: '【初回のみ】"allow pasting" とコンソールに入力して Enter を押します。', highlight: true },
                { n: '4', t: '項目からコードをコピーし、コンソールに貼り付けて Enter で実行します。' },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-7 h-7 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center text-xs font-black shrink-0 border border-slate-700 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-400 shadow-xl transition-all duration-500">
                    {step.n}
                  </div>
                  <p className={`text-[13px] leading-relaxed font-bold ${step.highlight ? 'text-amber-400' : 'text-slate-300'}`}>
                    {step.t}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-rose-50 border-2 border-rose-100 p-8 rounded-3xl mb-16 flex items-center gap-8 shadow-sm group hover:bg-rose-100/50 transition-colors"
        >
          <div className="w-16 h-16 rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-2xl shadow-rose-200 shrink-0 group-hover:scale-110 transition-transform">
            <AlertTriangle size={32} />
          </div>
          <div>
            <h3 className="text-rose-950 font-black italic uppercase tracking-[0.2em] text-xs mb-1.5 opacity-60">注意事項</h3>
            <p className="text-xl text-rose-900 font-extrabold leading-tight">
              【重要警告】本ツールの外部共有は固く禁じます。離席時は必ず動作を停止し、安全を確保してください。
            </p>
          </div>
        </motion.div>

        <div className="space-y-16 pb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2.5 h-10 bg-violet-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.4)]" />
              <h2 className="text-3xl font-black italic text-slate-800 tracking-tighter flex items-center gap-4 uppercase">
                ■ SFA貼付
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <CodeCard 
                id="code-new" 
                title="新着用コード" 
                value={scripts.SFA_NEW} 
                isEditable={isEditMode}
                accentColor="bg-violet-500"
                onUpdate={(v) => updateScript('SFA_NEW', v)}
              />
              <CodeCard 
                id="code-miitel" 
                title="MiiTel用コード" 
                value={scripts.MIITEL} 
                isEditable={isEditMode}
                accentColor="bg-blue-500"
                isDiscontinued={true}
                onUpdate={(v) => updateScript('MIITEL', v)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-2.5 h-10 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
              <h2 className="text-3xl font-black italic text-slate-800 tracking-tighter flex items-center gap-4 uppercase">
                ■ ターミナル貼付
              </h2>
            </div>
            <CodeCard 
              id="code-ps" 
              title="通知ツール" 
              value={scripts.NOTIF_TOOL} 
              isEditable={isEditMode}
              accentColor="bg-emerald-500"
              onUpdate={(v) => updateScript('NOTIF_TOOL', v)}
            />
          </div>
        </div>
      </main>

      <motion.button
        ref={fabRef}
        drag
        dragMomentum={false}
        onClick={handleEditToggle}
        className={`fixed bottom-10 right-10 w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl z-[100] cursor-grab active:cursor-grabbing transition-all hover:scale-110 active:scale-95 ring-4 ring-white shadow-black/20 ${
          isEditMode ? 'bg-amber-500' : 'bg-slate-900'
        }`}
        title={isEditMode ? '保存して終了' : 'ドラッグで移動 / クリックで編集モード'}
      >
        <Settings className={isEditMode ? 'animate-spin-slow' : 'group-hover:rotate-45 transition-transform duration-500'} size={28} />
      </motion.button>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
