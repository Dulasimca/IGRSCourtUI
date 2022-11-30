export class TableConstants {
   public static readonly governmentRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No.' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourt Name' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly timeboundjudgementColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'courttype', header: 'Court Type' },
        { field: 'caseno', header: 'Case No.' },
        { field: 'year', header: 'Year' },
        { field: 'judgementdate', header: 'Judgement Date' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'receiptdate', header: 'Receipt Date' },
        { field: 'timelimit', header: 'Time Limit' },
        { field: 'expirydate', header: 'Expiry Date' },
        { field: 'directedto', header: 'Directed To' },
        { field: 'natureofdirection', header: 'Nature of Direction' },
        { field: 'compliedornot', header: 'Complied(or)Not' },
        { field: 'remarks', header: 'Remarks' },
    ];  

    public static readonly igrRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No.' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourt Name' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly otherRespondentColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourt Name' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly lawofficersopinionColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No' },
        { field: 'nameofcourt', header: 'Name of Court' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'gistofopinionsought', header: 'Gistof Opinion Sought' },
        { field: 'gistofopinionreceived', header: 'Gistof Opinion Received' },
        { field: 'opinionreceived', header: 'Opinion Received' },
        { field: 'warafiled', header: 'WA/RA-Notfiled-Reason' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly pendingEnquiryColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'CaseType' },
        { field: 'caseno', header: 'CaseNo' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourt Name' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'subject', header: 'Subject' },
        { field: 'refno', header: 'DIG/DR/SR-RefNo' }
    ];

    public static readonly supremecourtcaseColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'caseno', header: 'DiaryNo/SLP Case No.' },
        { field: 'highcourtreference', header: 'Highcourt Reference' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'casefiledby', header: 'Casefiled By' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'gistofcase', header: 'Gist of Case' }
    ];

    public static readonly writeAppealsColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No.' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtreference', header: 'Highcourt Reference' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'regularnoreceived', header: 'Regular No. Received' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'natureofdisposal', header: 'Nature Of Disposal' },
        { field: 'remarks', header: 'Remarks' }
    ];

}