import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';//định dạng button thêm màu mè
import {MenuItem} from 'primeng/api';
import { DataService } from './data.service';
import { Note } from './note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public items : MenuItem[] = [];
  public notes : Note[] | undefined;//: Note[] | undefined ;//= null;
  public selectedNote : Note | undefined; //: any;//undefined không định nghĩa, bắt lỗi
  private authorId = 1;
  public newNote : Note | undefined;
  constructor(private primengConfig: PrimeNGConfig, private dataService: DataService) {}

  public ngOnInit() {
      this.primengConfig.ripple = true;
    //menubar
      this.items = [
        {
            label:'File',
            icon:'pi pi-fw pi-file',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },

            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',

                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',

                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },

                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off'
        }
    ];
        this.dataService.getNotes(this.authorId).subscribe((data: Note[])=> {// getNotes(1) 
            this.notes = data;
        });
    }

    public viewNote(note: Note){//khi click vào sẽ hiển thị nội dung của cái note đó
        console.log('view note', note);
        this.selectedNote = note;
    }

    public getSelectedClass(note : Note): string{
        if(!this.selectedNote){// nếu chọn slectedNote mà không có gì thì trả về rỗng
            return '';// trả về rỗng
        }
        return this.selectedNote.id === note.id ? 'selected' : 'nonSelected';
        //ngược lại nếu có selectedNote.id bằng với note.id thì  selected 'có màu' không thì 'nonSelected' 'không màu'
    }
    public addNote(): void{
        console.log('addNote');
        this.newNote = {
            id : 0,
            title: '',
            note: '',
            author: 'Tân Đặng',
            authorId: this.authorId, 
        };
    }
}

