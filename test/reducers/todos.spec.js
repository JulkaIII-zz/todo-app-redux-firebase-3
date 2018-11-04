import todos from "../../src/reducers/index";
describe("actions", () => {
  it("it action", () => {
    expect(2 + 2).toEqual(4);
  });
});

// describe('todos reducer', () => {
//   it('should handle initial state', () => {
//     expect(
//       todos(undefined, {})
//     ).toEqual({})
//   })

//   it('should handle FETCH_TODOS', () => {
//     expect(
//       todos([], {
//         type: 'FETCH_TODOS',
//         payload: {
//           auth: {
//             authError: null
//           },
//           data: {
//             0: {title: 'todo 1'}
//           }
//         }
//       })
//     ).toEqual({
//       type: 'FETCH_TODOS',
//       payload: {
//         auth: {
//           authError: null
//         },
//         data: {
//           0: {title: 'todo 1'}
//         }
//       }
//     }
//     )
//   })
// });
//   //   expect(
//   //     todos([
//   //       {
//   //         text: 'Run the tests',
//   //         completed: false,
//   //         id: 0
//   //       }
//   //     ], {
//   //       type: 'ADD_TODO',
//   //       text: 'Use Redux',
//   //       id: 1
//   //     })
//   //   ).toEqual([
//   //     {
//   //       text: 'Run the tests',
//   //       completed: false,
//   //       id: 0
//   //     }, {
//   //       text: 'Use Redux',
//   //       completed: false,
//   //       id: 1
//   //     }
//   //   ])

//   //   expect(
//   //     todos([
//   //       {
//   //         text: 'Run the tests',
//   //         completed: false,
//   //         id: 0
//   //       }, {
//   //         text: 'Use Redux',
//   //         completed: false,
//   //         id: 1
//   //       }
//   //     ], {
//   //       type: 'ADD_TODO',
//   //       text: 'Fix the tests',
//   //       id: 2
//   //     })
//   //   ).toEqual([
//   //     {
//   //       text: 'Run the tests',
//   //       completed: false,
//   //       id: 0
//   //     }, {
//   //       text: 'Use Redux',
//   //       completed: false,
//   //       id: 1
//   //     }, {
//   //       text: 'Fix the tests',
//   //       completed: false,
//   //       id: 2
//   //     }
//   //   ])
//   // })

//   // it('should handle TOGGLE_TODO', () => {
//   //   expect(
//   //     todos([
//   //       {
//   //         text: 'Run the tests',
//   //         completed: false,
//   //         id: 1
//   //       }, {
//   //         text: 'Use Redux',
//   //         completed: false,
//   //         id: 0
//   //       }
//   //     ], {
//   //       type: 'TOGGLE_TODO',
//   //       id: 1
//   //     })
//   //   ).toEqual([
//   //     {
//   //       text: 'Run the tests',
//   //       completed: true,
//   //       id: 1
//   //     }, {
//   //       text: 'Use Redux',
//   //       completed: false,
//   //       id: 0
//   //     }
//   //   ])
//   // })
