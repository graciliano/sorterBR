
export class LetraService {
   
   numero: number
   sorteio: number
   repetir: boolean
   numeros: number[] = []
   letras: String[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
      "O","P","Q","R","S","T","U","V","W","X","Y","Z"]
   letrasSorteadas: String[] = []

   constructor() {}

   sorteiaLetra() {
      let i: number = 0
      if (this.repetir == null || this.repetir == false) {
         if (this.numero >= 27) {
            this.numeros = []
            while (i < 26) {
               this.sorteio = Math.floor(Math.random() * (26 - 0))
               if (this.numeros.indexOf(this.sorteio) == -1) {
                  this.letrasSorteadas.push(this.letras[this.sorteio])
                  this.numeros.push(this.sorteio)
                  i++
               }
            } 
            return
         } 
         else if (this.numero == 0 || this.numero == null || this.numero == undefined) {
            this.sorteio = Math.floor(Math.random() * (26 - 0))
            this.letrasSorteadas.push(this.letras[this.sorteio]) 
            return
         } 
         else {
            this.numeros = []
            while (i < this.numero) {
               this.sorteio = Math.floor(Math.random() * (26 - 0))
               if (this.numeros.indexOf(this.sorteio) == -1) {
                  this.letrasSorteadas.push(this.letras[this.sorteio])
                  this.numeros.push(this.sorteio)
                  i++
               }
            } 
            return
         }
      } 
      else if(this.repetir == true) {
         if (this.numero == 0 || this.numero == null || this.numero == undefined) {
            this.sorteio = Math.floor(Math.random() * (26 - 0))
            this.letrasSorteadas.push(this.letras[this.sorteio])
         } 
         else {
            for (let i = 0; i < this.numero; i++) {
               this.sorteio = Math.floor(Math.random() * (26 - 0))
               this.letrasSorteadas.push(this.letras[this.sorteio])
            }
            return
         }
      }
   }
}