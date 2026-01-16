addEventListener("reset", function(e) {
    
    if (!this.confirm("Sure ypu want to clear your data?")) {
        e.preventDefault();
    }
})