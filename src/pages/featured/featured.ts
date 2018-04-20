import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventoDeilPage } from '../evento-deil/evento-deil';

@Component({
  selector: 'page-featured',
  templateUrl: 'featured.html',
})
export class FeaturedPage {
  pautas: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pautas = [
      {
        "id": 1,
        "name": "EXPOSIÇÃO “CARNAVAL – A MAIOR FESTA POPULAR DO BRASIL”",
        "description": "O Centro Cultural Palácio Rio Negro recebe, a partir do dia 9 de março, a exposição fotográfica “Carnaval – a maior festa popular do Brasil”, realizada por alunos da turma de fotografia do Serviço Nacional de Aprendizagem Comercial no Amazonas (Senac-AM). O evento, que vai reunir mais de 70 fotografias mostrando os mais variados ângulos da festa, é gratuito e conta com apoio da Secretaria de Estado de Cultura (SEC), por meio do Programa Espaço Aberto.",
        "location": "Av. Gen. Rodrigo Otávio, 945, Distrito Industrial",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "08:00",
        "hour_end": "17:00",
        "price": "1,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/exposi%C3%A7%C3%A3o-fotografica-carnaval-1.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg"
        }
      },
      {
        "id": 2,
        "name": "TARDE DANÇANTE",
        "description": "Na sexta-feira (09) acontece a tradicional “Tarde Dançante”, no Centro Estadual de Convivência do Idoso. O evento terá um repertório exclusivo com músicas de Bolero.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "14:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/04/FOTO-2.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg"
        }
      },
      {
        "id": 3,
        "name": "LANÇAMENTO DO DOCUMENTÁRIO “PELAS ÁGUAS DO RIO DE LEITE”",
        "description": "Como parte da programação do Espaço Aberto, haverá o lançamento do documentário “Pelas águas do rio de leite”, às 18h, no  Teatro da Instalação.",
        "location": "Praça Heliodoro Balbi, S/N - Centro",
        "type": "Cinema",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/09/3071-78-1024x767.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg"
        }
      },
      {
        "id": 4,
        "name": "APOIO SOCIAL E JURÍDICO",
        "description": "A temporada ‘Delas’ iniciou em 25 de fevereiro de 2018, e contará com debates sobre o protagonismo feminino, valorização da mulher negra, situação da mulher indígena e da mulher trans na sociedade; oficina de empoderamento; dia de beleza para moradoras de rua; marcha das mulheres; e apoio social e jurídico para mulheres em situação de risco.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Utilidade Pública",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "20:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/photo_raphael_alves.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/t6zkHwQ8nmU1N6X1OOouXIpyeYz.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/t6zkHwQ8nmU1N6X1OOouXIpyeYz.jpg"
        }
      },
      {
        "id": 5,
        "name": "Tarde Dançante",
        "description": "Na sexta (16) acontece a tradicional “Tarde Dançante”, no Centro Estadual de Convivência do Idoso. O evento terá um repertório exclusivo com músicas de Bolero.",
        "location": "Praça Heliodoro Balbi, S/N - Centro",
        "type": "Dança",
        "date_start": "16/03/2018",
        "date_end": "16/03/2018",
        "hour_start": "14:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2017/04/Sexta-Dan%C3%A7ante-02.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/thhj160MUUBrU4PkuLRmAf5t9Vy.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg"
        }
      },
      {
        "id": 6,
        "name": "DEBATE SOBRE A MULHER TRANS",
        "description": "A temporada ‘Delas’ iniciou em 25 de fevereiro de 2018, e contará com debates sobre o protagonismo feminino, valorização da mulher negra, situação da mulher indígena e da mulher trans na sociedade; oficina de empoderamento; dia de beleza para moradoras de rua; marcha das mulheres; e apoio social e jurídico para mulheres em situação de risco.",
        "location": "local",
        "type": "Utilidade Pública",
        "date_start": "16/03/2018",
        "date_end": "16/03/2018",
        "hour_start": "15:00",
        "hour_end": "17:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2015/10/133-3-960x600.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/2gdmZxFSweaYqzOBWxqh6Ufwn9C.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/34dxtTxMHGKw1njHpTjDqR8UBHd.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/2gdmZxFSweaYqzOBWxqh6Ufwn9C.jpg"
        }
      },
      {
        "id": 7,
        "name": "ESPETÁCULO DE DANÇA “NOTAS SOBRE ELA",
        "description": "O Teatro da Instalação irá receber o espetáculo “Notas sobre Ela”, da Panorando Produções Artísticas, no dia 17 de março, às 14h.",
        "location": "Av. Gen. Rodrigo Otávio, 945, Distrito Industrial",
        "type": "Dança",
        "date_start": "17/03/2018",
        "date_end": "17/03/2018",
        "hour_start": "14:00",
        "hour_end": "15:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/notas-sobre-ela.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/tAXARVreJnWfoANIHASmgYk4SB0.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/8PNgvvZLhR9ktYGYNSsT02HSTVm.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/tAXARVreJnWfoANIHASmgYk4SB0.jpg"
        }
      },
      {
        "id": 8,
        "name": "ESPETÁCULO MUSICAL HISTÓRIAS DE AMOR",
        "description": "Como parte da programação do Espaço Aberto, será realizado no Teatro Américo Alvarez, o espetáculo Histórias de Amor, do grupo Escândalo Fônico, que pretende reunir música e artes visuais, e tem como intuito mostrar que o amor vence todas as diferenças, as intolerâncias e  os preconceitos.",
        "location": "local",
        "type": "Dança",
        "date_start": "17/03/2018",
        "date_end": "17/03/2018",
        "hour_start": "14:00",
        "hour_end": "16:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/escandalo-fonico-750x500.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/dNrpCiRWrCNZLnEk16GCgaTOYEz.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/tFI8VLMgSTTU38i8TIsklfqS9Nl.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/dNrpCiRWrCNZLnEk16GCgaTOYEz.jpg"
        }
      },
      {
        "id": 9,
        "name": "EXPOSIÇÃO “CARNAVAL – A MAIOR FESTA POPULAR DO BRASIL”",
        "description": "O Centro Cultural Palácio Rio Negro recebe, a partir do dia 9 de março, a exposição fotográfica “Carnaval – a maior festa popular do Brasil”, realizada por alunos da turma de fotografia do Serviço Nacional de Aprendizagem Comercial no Amazonas (Senac-AM). O evento, que vai reunir mais de 70 fotografias mostrando os mais variados ângulos da festa, é gratuito e conta com apoio da Secretaria de Estado de Cultura (SEC), por meio do Programa Espaço Aberto.",
        "location": "Av. Gen. Rodrigo Otávio, 945, Distrito Industrial",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "08:00",
        "hour_end": "17:00",
        "price": "1,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/exposi%C3%A7%C3%A3o-fotografica-carnaval-1.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/8GVwdiskXXIQxkVjfKZrNp4sJ58.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/cezWGskPY5x7GaglTTRN4Fugfb8.jpg"
        }
      },
      {
        "id": 10,
        "name": "TARDE DANÇANTE",
        "description": "Na sexta-feira (09) acontece a tradicional “Tarde Dançante”, no Centro Estadual de Convivência do Idoso. O evento terá um repertório exclusivo com músicas de Bolero.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Dança",
        "date_start": "09/03/2018",
        "date_end": "09/03/2018",
        "hour_start": "14:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/04/FOTO-2.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg"
        }
      },
      {
        "id": 11,
        "name": "LANÇAMENTO DO DOCUMENTÁRIO “PELAS ÁGUAS DO RIO DE LEITE”",
        "description": "Como parte da programação do Espaço Aberto, haverá o lançamento do documentário “Pelas águas do rio de leite”, às 18h, no  Teatro da Instalação.",
        "location": "Praça Heliodoro Balbi, S/N - Centro",
        "type": "Cinema",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2014/09/3071-78-1024x767.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg"
        }
      },
      {
        "id": 12,
        "name": "APOIO SOCIAL E JURÍDICO",
        "description": "A temporada ‘Delas’ iniciou em 25 de fevereiro de 2018, e contará com debates sobre o protagonismo feminino, valorização da mulher negra, situação da mulher indígena e da mulher trans na sociedade; oficina de empoderamento; dia de beleza para moradoras de rua; marcha das mulheres; e apoio social e jurídico para mulheres em situação de risco.",
        "location": "Av. Silves Nº 2.222 – DISTRITO INDUSTRIAL I CEP 69.073-270",
        "type": "Utilidade Pública",
        "date_start": "15/03/2018",
        "date_end": "15/03/2018",
        "hour_start": "18:00",
        "hour_end": "20:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/photo_raphael_alves.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg"
        }
      },
      {
        "id": 13,
        "name": "Tarde Dançante",
        "description": "Na sexta (16) acontece a tradicional “Tarde Dançante”, no Centro Estadual de Convivência do Idoso. O evento terá um repertório exclusivo com músicas de Bolero.",
        "location": "Praça Heliodoro Balbi, S/N - Centro",
        "type": "Dança",
        "date_start": "16/03/2018",
        "date_end": "16/03/2018",
        "hour_start": "14:00",
        "hour_end": "19:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2017/04/Sexta-Dan%C3%A7ante-02.jpg"
      },
      {
        "id": 14,
        "name": "DEBATE SOBRE A MULHER TRANS",
        "description": "A temporada ‘Delas’ iniciou em 25 de fevereiro de 2018, e contará com debates sobre o protagonismo feminino, valorização da mulher negra, situação da mulher indígena e da mulher trans na sociedade; oficina de empoderamento; dia de beleza para moradoras de rua; marcha das mulheres; e apoio social e jurídico para mulheres em situação de risco.",
        "location": "local",
        "type": "Utilidade Pública",
        "date_start": "16/03/2018",
        "date_end": "16/03/2018",
        "hour_start": "15:00",
        "hour_end": "17:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2015/10/133-3-960x600.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/vZpB8ezB1IqpxI9rx553TuGwDzJ.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/njv65RTipNSTozFLuF85jL0bcQe.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/vZpB8ezB1IqpxI9rx553TuGwDzJ.jpg"
        }
      },
      {
        "id": 15,
        "name": "ESPETÁCULO DE DANÇA “NOTAS SOBRE ELA",
        "description": "O Teatro da Instalação irá receber o espetáculo “Notas sobre Ela”, da Panorando Produções Artísticas, no dia 17 de março, às 14h.",
        "location": "Av. Gen. Rodrigo Otávio, 945, Distrito Industrial",
        "type": "Dança",
        "date_start": "17/03/2018",
        "date_end": "17/03/2018",
        "hour_start": "14:00",
        "hour_end": "15:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/notas-sobre-ela.png",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/iR64jPreRVGM3MaNkynU2MeQ1pF.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/iR64jPreRVGM3MaNkynU2MeQ1pF.jpg"
        }
      },
      {
        "id": 16,
        "name": "ESPETÁCULO MUSICAL HISTÓRIAS DE AMOR",
        "description": "Como parte da programação do Espaço Aberto, será realizado no Teatro Américo Alvarez, o espetáculo Histórias de Amor, do grupo Escândalo Fônico, que pretende reunir música e artes visuais, e tem como intuito mostrar que o amor vence todas as diferenças, as intolerâncias e  os preconceitos.",
        "location": "local",
        "type": "Dança",
        "date_start": "17/03/2018",
        "date_end": "17/03/2018",
        "hour_start": "14:00",
        "hour_end": "16:00",
        "price": "0,00",
        "url_ticket": "",
        "image": "http://www.cultura.am.gov.br/conteudo/uploads/2018/03/escandalo-fonico-750x500.jpg",
        "images": {
          "poster": "http://image.tmdb.org/t/p/w500/9kkkuO9u0ZdTA1hzbNR5Nf2mtkO.jpg",
          "fanart": "http://image.tmdb.org/t/p/w500/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg",
          "banner": "http://image.tmdb.org/t/p/w500/9kkkuO9u0ZdTA1hzbNR5Nf2mtkO.jpg"
        }
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeaturedPage');
  }

  openPauta(pauta){
    this.navCtrl.push(EventoDeilPage, {pauta: pauta});
  }

}
