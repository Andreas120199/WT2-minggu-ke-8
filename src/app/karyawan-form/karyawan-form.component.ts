import { Component, OnInit } from '@angular/core';
import {  Karyawan } from '../karyawan';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-karyawan-form',
  templateUrl: './karyawan-form.component.html',
  styleUrls: ['./karyawan-form.component.scss']
})
export class KaryawanFormComponent implements OnInit {
  karyawan: Karyawan =this.formBuilder.group( {
    _id: ["", [Validators.required, Validators.minLength(5)]],
    nama: ["", [Validators.required]],
    divisi: ["", [Validators.required]],
    gajipokok: ["", [Validators.required]],
    tunjangan: ["", [Validators.required]]
  };
  id = null;
  error = false;
  update = true;

  constructor(
    private _snackBar: MatSnackBar,
    private ds: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // jika ada parameter id di URL
      if (params.get('id')) {
        this.id = params.get('id');

        this.ds.getKaryawan(this.id).subscribe(
          response => {
            this.karyawan = response as Karyawan;
          },
          err => {
            console.log(err);
            this.error = true;
          }
        );
      } else {
        this.update = false;
      }
    });
  }

  postKaryawan() {
    this.ds.postKaryawan(this.karyawan).subscribe(response => {
      // tampilkan notifikasi
      this.openSnackBar("Karyawan Added", null)
      this.router.navigate(['/first']);
    });
  }

  deleteKaryawan() {
    this.ds.deleteKaryawan(this.karyawan).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("Karyawan Deleted", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }

  updateKaryawan() {
    this.ds.updateKaryawan(this.karyawan).subscribe(
      response => {
        // tampilkan notifikasi
        this.openSnackBar("Karyawan Updated", null)
        this.router.navigate(['/first']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
