//try  =try code
//catch = catch error
//finaly =defualt work
// throw =manualy error


try {

    if (a == 0)
        // create error
        throw "value invalid month"
    //catch error
} catch (err) {
    console.log(err)

    //defualt finally
} finally {
    console.log("done")
}