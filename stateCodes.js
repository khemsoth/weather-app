export function convertState(state, abbr) {

    let states = [
      ['Alabama', 'US-AL'],
      ['Alaska', 'US-AK'],
      ['Arizona', 'US-AZ'],
      ['Arkansas', 'US-AK'],
      ['California', 'US-CA'],
      ['Colorado', 'US-CO'],
      ['Connecticut', 'US-CT'],
      ['Delaware', 'US-DE'],
      ['Florida', 'US-FL'],
      ['Georgia', 'US-GA'],
      ['Hawaii', 'US-HI'],
      ['Idaho', 'US-ID'],
      ['Illinios', 'US-IL'],
      ['Indiana', 'US-IN'],
      ['Iowa', 'US-IA'],
      ['Kansas', 'US-KS'],
      ['Kentucky', 'US-KY'],
      ['Louisiana', 'US-LA'],
      ['Maine', 'US-ME'],
      ['Maryland', 'US-MD'],
      ['Massachsetts', 'US-MS'],
      ['Michigan', 'US-MI'],
      ['Minnesota', 'US-MN'],
      ['Mississippi', 'US-MS'],
      ['Missouri', 'US-MO'],
      ['Montana', 'US-MN'],
      ['Nebraska', 'US-NE'],
      ['Nevada', 'US-NV'],
      ['New Hampshire', 'US-NH'],
      ['New Jersey', 'US-NJ'],
      ['New Mexico', 'US-NM'],
      ['New York', 'US-NY'],
      ['North Carolina', 'US-NC'],
      ['North Dakota', 'US-ND'],
      ['Ohio', 'US-OH'],
      ['Oklahoma', 'US-OK'],
      ['Oregon', 'US-OR'],
      ['Pennsylvania', 'US-PA'],
      ['Rhode Island', 'US-RI'],
      ['South Carolina', 'US-SC'],
      ['South Datkota', 'US-SD'],
      ['Tennessee', 'US-TN'],
      ['Texas', 'US-TX'],
      ['Utah', 'US-UT'],
      ['Vermont', 'US-VT'],
      ['Virginia', 'US-VA'],
      ['Washington', 'US-WA'],
      ['West Virginia', 'US-WV'],
      ['Wisconsin', 'US-WI'],
      ['Wyoming', 'US-WY'],
    ]
    for(var i = 0; i < states.length; i++) {
      if(state == states[i][0]) {
        abbr = states[i][1]
        return abbr
      }
    }

}
