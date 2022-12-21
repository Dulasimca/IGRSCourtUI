export class TableConstants {
   public static readonly respondentColumns: any[] = [
        { field: 'zonename', header: 'Zone' },
        { field: 'districtname', header: 'District' },
        { field: 'sroname', header: 'SRO' },
        { field: 'casetypename', header: 'Case Type' },
        { field: 'casenumber', header: 'Case No.' },
        { field: 'casedate', header: 'Case Date' },
        { field: 'caseyear', header: 'Year' },
        { field: 'courtname', header: 'Highcourt Name' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'mainrespondents', header: 'Respondents' },
        { field: 'mainprayer', header: 'Gist of Case/ main prayer' },
        { field: 'countervalue', header: 'Counter Filed' },
        { field: 'casestatusname', header: 'Case Status' },
        { field: 'judgement', header: 'Judgement (For/Against)' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly timeBoundJudgementColumns: any[] = [
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

    public static readonly lawOfficersOpinionColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'casetype', header: 'Case Type' },
        { field: 'caseno', header: 'Case No' },
        { field: 'casedate', header: 'Case Date' },
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
        { field: 'casedate', header: 'CaseDate' },
        { field: 'year', header: 'Year' },
        { field: 'highcourtname', header: 'Highcourt Name' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'stageofcase', header: 'Case Status' },
        { field: 'gistofcase', header: 'Gist of Case' },
        { field: 'subject', header: 'Subject' },
        { field: 'refno', header: 'DIG/DR/SR-RefNo' }
    ];

    public static readonly supremeCourtCaseColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' },
        { field: 'caseno', header: 'DiaryNo/SLP Case No.' },
        { field: 'casedate', header: 'CaseDate' },
        { field: 'highcourtreference', header: 'Highcourt Reference' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'respondentsname', header: 'Respondents Name' },
        { field: 'casefiledby', header: 'Casefiled By' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'stageofcase', header: 'Stage of Case' },
        { field: 'gistofcase', header: 'Gist of Case' }
    ];

    public static readonly writeAppealsColumns: any[] = [
               { field: 'casenumber', header: 'Case No.' },
        { field: 'casedate', header: 'Case Date'},
        { field: 'caseyear', header: 'Year' },
        { field: 'courtname', header: 'Courtname' },
        { field: 'petitionername', header: 'Petitioner Name' },
        { field: 'mainrespondents', header: 'Respondents Name' },
        { field: 'mainprayer', header: 'Gist of Case/ main prayer' },
        { field: 'counterfiled', header: 'Counter Filed' },
        { field: 'casestatusname', header: 'Case Status' },
        { field: 'regularnumber', header: 'Regular No. Received' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly reportsColumns: any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'district', header: 'District' },
        { field: 'sro', header: 'SRO' }

    ];

    public static readonly caNotFiledReportColumns : any[] = [
        { field: 'zone', header: 'Zone' },
        { field: 'zone', header: 'Number', colspan:3 },
        { field: 'govtRespondent', header: 'Govt Respondent' },
        { field: 'igrRespondent', header: 'IGR Respondent' },
        { field: 'othersRespondent', header: 'Others Respondent' },
        { field: 'total', header: 'Total' },
        { field: 'pendingGp', header: 'Pending with G.P for vetting' }

    ];

    public static readonly droSdcColumns : any[] = [
        { field: 'dro', header: 'DRO' },
        { field: 'casefromDate', header: 'Case from Date' },
        { field: 'casetoDate', header: ' Case to Date' },
        { field: 'total', header: 'Total' },
        { field: 'No of CA Filed week', header: 'No of CAs Filed week' },
        { field: 'No of CA Filed week', header: ' Balance No of CAs Filed week' },
        { field: 'pendingGp', header: 'No of CAs Pending with G.P for vetting' },
        { field: 'remarks', header: 'Remarks' }
    ];

    public static readonly digReportColumns: any[] = [
        { field: 'digs', header: 'DIGs' },
        { field: 'casefromDate', header: 'Case Date From' },
        { field: 'casetoDate', header: 'Case Date To' },
        { field: 'caNotFiled', header: 'No.Of CAs Not Filed' },
        { field: 'newAffidavits', header: 'New Affidavits Received this week' },
        { field: 'total', header: 'Total' },
        { field: 'caFiled', header: 'No.Of CAs Filed' },
        { field: 'caTobeFiled', header: 'Balance No.Of CAs To Be Filed' },
        { field: 'caPending', header: 'CAs Pending With G.P For Vetting' },
        { field: 'remarks', header: 'Remarks' },
    ];

    public static readonly aeeReportColumns: any[] = [
        { field: 'aee', header: 'AEE' },
        { field: 'casefromDate', header: 'Case Date From' },
        { field: 'casetoDate', header: 'Case Date To' },
        { field: 'caNotFiled', header: 'No.Of CAs Not Filed' },
        { field: 'newAffidavits', header: 'New Affidavits Received this week' },
        { field: 'total', header: 'Total' },
        { field: 'caFiled', header: 'No.Of CAs Filed' },
        { field: 'caTobeFiled', header: 'Balance No.Of CAs To Be Filed' },
        { field: 'caPending', header: 'CAs Pending With G.P For Vetting' },
        { field: 'remarks', header: 'Remarks' },
    ];
    public static readonly ScCaNotFiledColumns: any[] = [
        { field: 'slpCaseNo', header: 'SLPCaseNo.' },
        { field: 'petitioner', header: 'Petitioner' },
        { field: 'Respondent', header: 'Respondent' },
        { field: 'GistOfMatter', header: 'GistOfMatter' },
        { field: 'remarks', header: 'Remarks' },
        { field: 'section', header: 'Section' },
        
    ];

    public static readonly supremeCourtCaseReportColumns: any[] = [
        { field: 'dept', header: 'Dept' },
        { field: 'casefromDate', header: 'Case Date From' },
        { field: 'casetoDate', header: 'Case Date To' },
        { field: '', header: 'Total no.of Cases' },
        { field: '', header: 'No.of Cases of Government as Petitioner' },
        { field: '', header: 'No.Of Cases Of IGR as Petitioner' },
        { field: '', header: 'No.Of Cases Others(D.R,S.R,DRO,SDC)as Petitioner' },
        { field: '', header: 'No.Of Cases Of Individual as Petitioner' },
    ];

    public static readonly contemptCasesHcReportColumns: any[] = [
        { field: '', header: 'Dept' },
        { field: '', header: 'Total Contempt Cases ' },
        { field: '', header: 'Contempt Implemented' },
        { field: '', header: 'Contempt Not Implemented' },
        { field: '', header: 'Contempt Appealed' },
        { field: '', header: 'Contempt Not Appealed' },
        { field: '', header: 'Contempt Affidavit Filed' },
        { field: '', header: 'Contempt Affidavit Not Filed' },
        { field: '', header: 'Department Not Contemnor' },
    ];

    public static readonly caseStatusColumns: any[] = [
        { field: 'casestatusname', header: 'Case Status Name'},
        { field: 'flag', header: 'Status'}
    ];

    public static readonly zonemasterColumns: any[] = [
        { field: 'zonename', header: 'Zone Name'},
        { field: 'flag', header: 'Status'}
    ];

    public static readonly CaseTypeColumn: any[] = [       
        { field: 'casetypename', header: 'Case Type Name' },
        { field: 'createddate', header: 'Created Date' },
        { field: 'flag', header: 'Active Flag' }    
    ];

    public static readonly CourtTypeMaster: any[] = [
        { field: 'courtname', header: 'Court Name'},
        { field: 'flag', header: 'Status'}
    ];

    public static readonly DistrictMasterColumns: any[] = [
        { field: 'zonename', header: 'Zone Name'},
        { field: 'districtname', header: 'District Name'},
        { field: 'flag', header: 'Status'}
    ];
    public static readonly judgementMaster: any[] = [
        { field: 'judgementname', header: 'Judgement Name'},
        { field: 'createddate', header: 'Created Date'},
        { field: 'flag', header: 'Status'}
    ];

    public static readonly SroMasterColumns: any[] = [
        {field:'zonename',header: 'ZoneName'},
        {field:'districtname',header: 'DistrictName'},
        {field:'sroname',header: 'SROName'},
        {field:'flag',header: 'Status'}
    ];

    public static readonly UserMasterColumns: any[] = [
        { field: 'rolename', header: 'Role Name'},
        { field: 'zonename', header: 'Zone Name'},
        { field: 'districtname', header: 'District Name'},
        { field: 'sroname', header: 'Sro Name'},
        { field: 'username', header: 'User Name'},
        {field: 'password', header: 'Password'},
        { field: 'mailid', header: 'mailid'},
        { field: 'mobile', header: 'Mobile'},          
        { field: 'flag', header: 'Status'}
    ];

    public static readonly RoleMasterColumns: any[] = [
        { field: 'rolename', header: 'Role Name'},
        { field: 'flag', header: 'Status'}
    ];


    public static readonly RespondentMaster: any[] = [
        { field: 'respondentsname', header: 'Respondents Name'},
        { field: 'createddate', header: 'Created Date'},
        { field: 'flag', header: 'Status'}
    ];

    public static readonly SlpMaster: any[] = [
        
        { field: 'name', header: 'Name'},
        { field: 'createddate',header:'Created Date'},
        { field: 'flag', header: 'Status'}
    ];
 

    public static readonly MenuMasterColumns: any[] = [
        { field: 'name', header: 'Menu Name'},
        { field: 'url', header: 'URL'},
        { field: 'parentid',header:'Parent Id'},
        { field: 'parentname',header:'Parent Name'},
        { field: 'icon',header:'Icon'},
        { field: 'rolename', header: 'Role Name'},   
        { field: 'isactive', header: 'Status'}        
    ];
}