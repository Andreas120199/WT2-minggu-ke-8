import { Component, OnInit, ViewChild } from '@angular/core';
import { Karyawan } from '../karyawan';
import { DataService } from '../data.service';

@Component({
  selector: 'app-First',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  karyawans: Karyawan[];
  error:boolean;
  displayedColumns: string[] = ['nama', 'gajipokok', 'tunjangan', 'divisi'];
                    

  constructor(
    private ds: DataService,
  ) {}

  ngOnInit(): void {
    this.ds.getKaryawans().subscribe(
      response => {
        this.karyawans = response as Karyawan[];
      },
      err => {
        console.log(err);
        this.error = true;
      }
    );
  }

}
