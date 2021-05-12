import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-formattor',
  templateUrl: './json-formattor.component.html',
  styleUrls: ['./json-formattor.component.css']
})
export class JsonFormattorComponent implements OnInit {
  output:any[] = [];
  input:any;
  isClicked:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  getJsonData(){
    this.isClicked = true;
    this.output = [];
    let final:any = [];
    //Check if input data is valid or not
    if(this.IsJsonString(this.input)){
      //Parse json
      const parsed = JSON.parse(this.input);
      //Form one single array from parsed data
      for (const key in parsed) {
          const element = parsed[key];
          element.forEach((val: any) =>{
            final.push(val)
          })
      }
      
      //loop through each element in final array to check for parent_Id is equal to id
      final.forEach((node: any) => {
        // If No parent_id, it means its means it is a root
        if (!node.parent_id) return this.output.push(node);
        
        // Insert node as child of parent in final array
        const parentIndex = final.findIndex((el: { id: any; }) => el.id === node.parent_id);
        if (!final[parentIndex].children) {
          return final[parentIndex].children = [node];
        }
        
        final[parentIndex].children.push(node);
      });
      //console.log(root);

    }
  }

  IsJsonString(str:any) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

reset() {
  this.isClicked = false;
}

  // onResize(event:any) {
  //   const width = event.target.innerWidth;
  //   if (width < 768) {
  //     this.rowsVal = 7;
  //   } else {
  //     this.rowsVal = 18;
  //   }
  // }


}
