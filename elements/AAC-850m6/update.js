function(instance, properties, context) {
    
    var fromDate = properties.fromDate;
    var toDate = properties.toDate;
    
    if (!fromDate) {
        fromDate = Date.now();
    }
    
    if (!toDate) {
        toDate = Date.now();
    }

	var timeString = vagueTime.get({
        from: fromDate,
        to: toDate,
    });
    
    instance.publishState("timeString", timeString);
    
}