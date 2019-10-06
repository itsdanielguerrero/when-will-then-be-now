function filterLogsByEnv(logs, env) {
  const filteredLogs = []

  logs.forEach((log) => {
    if (log.environment === env) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogsOnDate(logs, dateFilter) {
  const filteredLogs = []
  const parsedDateFilter = new Date(dateFilter)
  
  logs.forEach((log) => {
    const timestampDate = new Date(log.timestamp)
    //toString() provide same date as dateFilter but also provides time - when we compare the time 
    //used getUTCDate() and getUTCMonth() to get a universal time code day and month and to exclude time.
    if (parsedDateFilter.getUTCDate() === timestampDate.getUTCDate() && 
        parsedDateFilter.getUTCMonth() === timestampDate.getUTCMonth()) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogs(logs, env, dateFilter) {
  const envLogs = filterLogsByEnv(logs, env)

  if (dateFilter) {
    return filterLogsOnDate(envLogs, dateFilter)
  } else {
    return envLogs
  }
}

module.exports = filterLogs
