(()=>{var d=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var m=d((p,r)=>{var n=class{constructor(e){this.model=e,this.mainEl=document.querySelector("#main"),this.msgInput=document.querySelector("#message-input"),this.submitBtn=document.querySelector("#message-submit"),this.submitBtn.addEventListener("click",()=>{let c=this.msgInput.value;this.addNewNote(c),this.msgInput.value=""})}addNewNote(e){this.model.addNote(e),this.displayNotes()}displayNotes(){document.querySelectorAll(".note").forEach(s=>s.remove()),this.model.getNotes().forEach(s=>{let o=document.createElement("div");o.className="note",o.textContent=s,this.mainEl.append(o)})}};r.exports=n});var l=d((v,u)=>{var i=class{constructor(){this.notes=[]}getNotes(){return this.notes}addNote(e){this.notes.push(e)}reset(){this.notes=[]}};u.exports=i});var a=m(),h=l();model=new h;view=new a(model);})();
