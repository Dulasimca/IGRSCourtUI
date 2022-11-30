export class TableConstants {
   public static readonly governmentRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourtname' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'gistofcase', header: 'GistofCase' },
        { field: 'counterfiled', header: 'CounterFiled' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly timeboundjudgementColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'courttype', header: 'CourtType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'judgementdate', header: 'JudgementDate' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'receiptdate', header: 'ReceiptDate' },
        { field: 'timelimit', header: 'Timelimit' },
        { field: 'expirydate', header: 'ExpiryDate' },
        { field: 'directedto', header: 'DirectedTo' },
        { field: 'natureofdirection', header: 'NatureofDirection' },
        { field: 'compliedornot', header: 'CompliedorNot' },
        { field: 'remarks', header: 'Remarks' },
    ];  

    public static readonly igrRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'HighcourtName' },
        { field: 'gistofcase', header: 'GistofCase' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'counterfiled', header: 'CounterFiled' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly otherRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourtname' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'gistofcase', header: 'GistofCase' },
        { field: 'counterfiled', header: 'CounterFiled' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly lawofficersopinionColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'nameofcourt', header: 'NameofCourt' },
        { field: 'gistofcase', header: 'Gistofcase' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'gistofopinionsought', header: 'GistofOpinionSought' },
        { field: 'gistofopinionreceived', header: 'GistofOpinionReceived' },
        { field: 'opinionreceived', header: 'OpinionReceived' },
        { field: 'warafiled', header: 'WA/RA-Notfiled-Reason' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly pendingEnquiryColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourtname' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'gistofcase', header: 'GistofCase' },
        { field: 'subject', header: 'Subject' },
        { field: 'refno', header: 'DIG/DR/SR-RefNo' }
    ];

    public static readonly supremecourtcaseColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'Sro' },
        { field: 'caseno', header: 'DiaryNo/SLP-CaseNo' },
        { field: 'highcourtreference', header: 'Highcourtreference' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'casefiledby', header: 'CasefiledBy' },
        { field: 'counterfiled', header: 'Counterfiled' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'gistofcase', header: 'GistofCase' }
    ];

    public static readonly writeAppealsColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtreference', header: 'HighcourtRef' },
        { field: 'petitionername', header: 'PetitionerName' },
        { field: 'respondentsname', header: 'RespondentsName' },
        { field: 'gistofcase', header: 'GistofCase' },
        { field: 'regularnoreceived', header: 'RegularNo.Received' },
        { field: 'stageofcase', header: 'StageofCase' },
        { field: 'natureofdisposal', header: 'NatureOfDisposal' },
        { field: 'remarks', header: 'Remarks' }
    ];

}