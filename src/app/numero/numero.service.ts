export class NumeroService {

   numero: number
   numMin: number
   numMax: number
   sorteio: number
   numeros: number[] = []
   resultErro: String
   token: number

   constructor() { }

   sorteiaNumero() {

      this.token = this.numMax - this.numMin

      this.numeros = []

      if (this.numMin > this.numMax || this.numero < 0) {
         this.resultErro = 'Sorteio fora de parâmetro'
         return
      }

      if (this.numero == 0) {
         if (this.numMin == 0 && this.numMax == 0) {
            this.sorteio = Math.floor(Math.random() * (101 - 0))
            this.numeros.push(this.sorteio)
            return
         } else {
            this.sorteio = Math.floor(Math.random() * (this.numMax - this.numMin + 1) + this.numMin)
            this.numeros.push(this.sorteio)
            return
         }
      }

      else {
         if (this.numMin == 0 && this.numMax == 0) {
            let i = 0
            while (i < this.numero) {
               this.sorteio = Math.floor(Math.random() * (101 - 0))
               if (this.numeros.indexOf(this.sorteio) == -1) {
                  this.numeros.push(this.sorteio)
                  i++
               }
            }
            return
         }
         if (this.numero > this.token) {
            this.resultErro = 'Sorteio fora de parâmetro'
            return
         }
         else {
            let i = 0
            while (i < this.numero) {
               this.sorteio = Math.floor(Math.random() * (this.numMax - this.numMin + 1) + this.numMin)
               if (this.numeros.indexOf(this.sorteio) == -1) {
                  this.numeros.push(this.sorteio)
                  i++
               }
            }
            return
         }
      }

   }

   zeraValores() {
      this.numMax = 0
      this.numMin = 0
      this.numero = 0
      this.sorteio = 0
      this.token = 0
      this.resultErro = ''
   }

}