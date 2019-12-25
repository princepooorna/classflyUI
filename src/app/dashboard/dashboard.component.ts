import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  responses = 
  [{tname: 'Ravi Chan',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix Ahmed',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix Ahmed',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'},
  {tname: 'Anix A',sub: 'Python',tpc:'Object-Oriented',lang:'English',date:'05/Jan/55',time:'05:60 PM'}
];


  resp:Object
//   dashdata = {
//     'clasatnd':[[],[]],  
//     'clastoatnd':[[],[]],
//     #classes to take
//     'clastotke':[[],[]],
//     'clastook':[[],[]],
//     #Current day work
//     'curntdaytke':[[],[]],   #classes to take
//     'curntdayatnd':[[],[]]
// }

  constructor(private router: Router,private data:DataService) { }

  ngOnInit() {
    if(!sessionStorage.getItem('user'))
    {
      this.router.navigate(['/login'])
      return
    }
    //else if(!sessionStorage.getItem('feed'))
    //{
     // alert('You cannot access until you give feedback')
     // this.router.navigate(['/feedback'])
     // return
    //}

    this.data.dashboard().subscribe(
      data => this.resp = data,
      (err) => console.log(err),
      () => this.succ(this.resp)
    )

  }

  succ(resp)
  {
    if(resp.code == 200)
    {
      this.resp = resp.data
    }
  }

  

// onNavigate(){
//   window.open("https://www.google.com", "_blank");
// }



}
