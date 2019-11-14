trigger CandidateTrigger on Candidate__c (before insert, before update) {
    if(Trigger.isBefore){
        if(Trigger.isInsert || Trigger.isUpdate){
        //if(Trigger.isInsert){
            for(Candidate__c candi : Trigger.New){
                System.debug('candi at 5 -->'+candi);
                //candi.Name = null;
                candi.count__c += 1;
                //TestFuture.futureMethod();
                System.debug('candi -->'+candi);
            }
        }
    }
}