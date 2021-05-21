export const diamond2 =(n) => {
    for(let i=0; i<n; i++){
        let str="";
        for(let j=i; j<n-1; j++){
            str = str + ' ';
        }
        for(let k=0; k<=i; k++) {
            str = str + '* '
        }

        console.log(str);
    }
}

export const diamondPattern =(n) => {
    for(let i =0; i<n; i++){
        let str=""
       
        for(let j=n-1; j>i; j--){
            str = str + ' '
        }
      

        for(let k=0; k<=i; k++){
            str = str + '* '
        }
        console.log(str);
    }

    for(let i =n; i>0; i--){
        let str=""
       
        for(let j=i; j<n; j++){

            str = str + ' '
        }
      

        for(let k=0; k<i; k++){
            str = str + '* '
        }
        console.log(str);
    }

    
}



