import { StartFunc as StartFuncFetchFunc } from "./DeleteButton/FetchFunc.js";;

let StartFunc = ({ inFromFetch }) => {
    var $table = $('#table');

    $table.bootstrapTable('destroy');

    // $table.bootstrapTable({ data:inFromFetch});

    // $table.bootstrapTable({
    //     data: inFromFetch, onPostBody: function () {
    //         $(".fixed-table-toolbar .search .search-input").focus()
    //     },
    //     onClickRow: LocalOnClickRow
    // });

    $table.bootstrapTable({
        onPostBody: function () {
            $(".fixed-table-toolbar .search .search-input").focus()
        },
        onClickRow: LocalOnClickRow
    });

};

let LocalOnClickRow = async (row, $element, field) => {
    if (field === 2) {
        let LocalFromSwal = await swal.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this imaginary file!",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, I am sure!',
            cancelButtonText: "No, cancel it!"
        });

        if (LocalFromSwal.isConfirmed) {
            console.log("aaaaa", row, $element, field, field === 2);
            //   $(e.target).closest('form').submit() // Post the surrounding form
            let LocalFromDeleteFetch = await StartFuncFetchFunc({ inUuId: row.UuId });

            console.log("LocalFromDeleteFetch", LocalFromDeleteFetch);

            if (LocalFromDeleteFetch) {
                var $table = $('#table');

                $table.bootstrapTable('destroy');

                $table.bootstrapTable({
                    onPostBody: function () {
                        $(".fixed-table-toolbar .search .search-input").focus()
                    },
                    onClickRow: LocalOnClickRow
                });

            };

        };

        // console.log("aaaaa", row, $element, field, field === 2);
    };
};

export { StartFunc };