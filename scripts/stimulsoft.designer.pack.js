/*
Stimulsoft.Reports.JS
Version: 2023.2.1
Build date: 2023.03.22
License: https://www.stimulsoft.com/en/licensing/reports
*/
!function(v){var f;"object"==typeof exports&&"undefined"!=typeof module?module.exports=(f=require("./stimulsoft.viewer.pack"),Object.assign(f,v(f.Stimulsoft))):"function"==typeof define&&define.amd?define(["./stimulsoft.viewer.pack"],f=>Object.assign(f,v(f.Stimulsoft))):Object.assign(window,v(window.Stimulsoft))}(function(f){var v={Stimulsoft:f||{}};if(f&&(f.__engineVersion&&"2023.2.1"!==f.__engineVersion?console.warn("Scripts versions mismatch: engine ver. = %s; designer ver. = 2023.2.1",f.__engineVersion):"2023.2.1"!==f.__reportsVersion&&console.warn("Scripts versions mismatch: reports ver. = %s; designer ver. = 2023.2.1",f.__reportsVersion)),
,v.Stimulsoft.decodePackedData&&v.Stimulsoft.Viewer)for(const b of["designerScript","blocklyScript"])v.Stimulsoft[b]&&Object.assign(v,v.Stimulsoft.decodePackedData(v.Stimulsoft[b])(v.Stimulsoft)),delete v.Stimulsoft[b];return v});