<!-- chart der viser Hvilke genrer sælger bedst?-->

fetch("genre.json")
    .then(response=> response.json())
    .then(genreData => {

        const labelArray1= []
        const dataArray1 = []

        genreData.forEach(genre => {
            labelArray1.push(genre.Name)
            dataArray1.push(genre.TotalSales)
        })

        console.log(labelArray1)
        console.log(dataArray1)


        const ctx1 = document.querySelector('#chart1').getContext('2d');
        const chart1 = new Chart(ctx1, {  // Stort C her
            type: 'bar',
            data: {
                labels: labelArray1,
                datasets: [{
                    label: 'Total Sales',
                    data: dataArray1,
                    backgroundColor: '#2563eb',
                    borderWidth: 4,
                    borderColor: 'gray',
                    hoverBorderWidth: 4,
                    hoverBorderColor: 'black',
                }],
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Genre',
                            color: '#334155',
                            font: { size: 16, weight: 'bold' }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Total Sales',
                            color: '#334155',
                            font: { size: 16, weight: 'bold' }
                        }
                    }
                }
            }
        });

    });

<!-- chart der viser Hvilke kunstnere har udgivet flest albums?-->

fetch("kunstner.json")
    .then(response=> response.json())
    .then(genreData => {

        const labelArray2 = []
        const dataArray2 = []

        genreData.forEach(genre => {
            labelArray2.push(genre.Name)
            dataArray2.push(genre.Albums)
        })

        console.log(labelArray2)
        console.log(dataArray2)


        const ctx2 = document.querySelector('#chart2').getContext('2d');
        const chart2 = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: labelArray2,
                datasets: [{
                    label: 'Most Album Releases',
                    data: dataArray2,
                    backgroundColor: ['#16a34a'],
                    borderWidth: 4,
                    borderColor: 'gray',
                    hoverBorderWidth: 4,
                    hoverBorderColor: '#dc6262',
                },
                ],


            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Genre',
                            color: '#334155',
                            font: {size: 16, weight: 'bold'}
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Total Album',
                            color: '#334155',
                            font: {size: 16, weight: 'bold'}
                        }
                    }
                }


            }
        })
    });

<!-- chart der viser Hvilke lande har flest kunder?-->


        fetch("land.json")
            .then(response => response.json())
            .then(genreData => {

                const labelArray3 = [];
                const dataArray3 = [];

                genreData.forEach(genre => {
                    labelArray3.push(genre.Country);
                    dataArray3.push(genre.Customers);
                });

                console.log(labelArray3);
                console.log(dataArray3);

                const ctx3 = document.querySelector('#chart3').getContext('2d');
                const chart3 = new Chart(ctx3, {
                    type: 'bar',
                    data: {
                        labels: labelArray3,
                        datasets: [{
                            label: 'Customers within each country',
                            data: dataArray3,
                            backgroundColor: ['#6C7AE0'],
                            borderWidth: 4,
                            borderColor: 'gray',
                            hoverBorderWidth: 4,
                            hoverBorderColor: '#dc6262',
                        }],
                    },
                    options: {
                        indexAxis: 'y',
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Customers',
                                    color: '#334155',
                                    font: { size: 16, weight: 'bold' }
                                }
                            }
                        }
                    }
                });
            });
