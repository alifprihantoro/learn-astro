---
title: "editor js"
slug: editor-js
date: 2022-08-01T08:01:30+07:00
lastmod: 2022-08-01T08:01:33+07:00
description: "editor js, editable"
---
```typescriptreact
export default function TesEditorText() {
  // function insertHtmlAtSelectionEnd(html: any, isBefore: any) {
  //   var sel, range, node;
  //   if (window.getSelection) {
  //     sel = window.getSelection();
  //     if (sel.getRangeAt && sel.rangeCount) {
  //       range = window.getSelection().getRangeAt(0);
  //       range.collapse(isBefore);
  //
  //       // Range.createContextualFragment() would be useful here but was
  //       // until recently non-standard and not supported in all browsers
  //       // (IE9, for one)
  //       var el = document.createElement("b");
  //       el.innerHTML = html;
  //       var frag = document.createDocumentFragment(),
  //         node,
  //         lastNode;
  //       while ((node = el.firstChild)) {
  //         lastNode = frag.appendChild(node);
  //       }
  //       area.focus();
  //       range.insertNode(frag);
  //     }
  //   } else if (document.selection && document.selection.createRange) {
  //     range = document.selection.createRange();
  //     range.collapse(isBefore);
  //     range.pasteHTML("fas" + html);
  //   }
  // }

  // console.log(document.getSelection());
  // console.log(document.getSelection().getRangeAt(0)?.focusOffset);
  // console.log(document.getSelection().getRangeAt(0)?.anchorOffset);
  // console.log(document.getSelection().getRangeAt(0));
  function doIt() {
    let area = document.getElementById("area") as HTMLTextAreaElement;

    const start = area?.selectionStart;
    const end = area?.selectionEnd;
    const value = area.value;
    const part1 = value.substring(0, start);
    const part2 = value.substring(start, end);
    const part3 = value.substring(end);
    const isi1 = "<b>";
    const isi2 = "ini isi";
    const isi3 = "</b>";
    if (part2 !== "") {
      area.value = part1 + isi1 + part2 + isi3 + part3;
      area?.setSelectionRange(
        start + isi1.length,
        start + part2.length + isi1.length
      );
    } else {
      area.value = part1 + isi1 + isi2 + isi3 + part3;
      area?.setSelectionRange(
        start + isi1.length,
        start + isi2.length + isi1.length
      );
    }
    area?.focus();
  }

  // function boldCommand() {
  //     const strongElement = document.createElement("strong");
  //     const userSelection = window.getSelection();
  //     const selectedTextRange = userSelection.getRangeAt(0);
  //     console.log(selectedTextRange)
  //     // selectedTextRange.surroundContents(strongElement);
  //     selectedTextRange.collapse(strongElement)
  // }
  return (
    <div>
      {/*       <input
       *         type="button"
       *         onClick={() => insertHtmlAtSelectionEnd("<b>hello</b>", true)}
       *         value="Insert before"
       *       />
       *       <input
       *         type="button"
       *         onClick={boldCommand}
       *         value="bold"
       *       />
       *       <input
       *         type="button"
       *         onClick={() => insertHtmlAtSelectionEnd("[AFTER]", false)}
       *         value="Insert after"
       *       />
       *
       *       <div id="area" contentEditable="true">
       *         Some editable text. Select some and press on of the buttons above.
       *       </div> */}

      {/* <div id="area" contentEditable="true">Some editable text. Select some and press on of the buttons above.</div> */}
      <textarea id="area">isi disini</textarea>
      <input type="button" onClick={doIt} value="DoIt" />
    </div>
  );
}
```

